// read all directories in the posts directory

var fs = require('fs');
var path = require('path');
const cheerio = require('cheerio');
const axios = require('axios')
const qs = require('qs')

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var siteDir = path.join(__dirname, 'blog/_site/');
const client = axios.create({
  baseURL: process.env.API_URL,
})
client.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${process.env.API_TOKEN}`
  return config
})


const addTagIfNot = async (tag) => {
  const urlParams = qs.stringify(
    {
      filters: { slug: tag },
    }
  )
  const tags = await client.get(`/api/tags?${urlParams}`)
  if (tags.data.data.length > 0) {
    return tags.data.data[0].id
  }
  const newTag = await client.post('/api/tags', {
    data: {
      name: tag,
      slug: tag
    }
  })
  return newTag.data.data.id
}

const processPosts = async (posts) => {
  for (const content of posts) {
    await uploadPost(content.title, content.date, content.tags, content.author, content.slug, content.body)
  }
}

const uploadPost = async (title, date, tags, author, slug, body) => {
  const splittedTags = tags.split(' ').map(x => x.trim()).filter(x => x.length > 0)
  const tagIds = []
  for (const tag of splittedTags) {
    const tagId = await addTagIfNot(tag)
    tagIds.push(tagId)
  }
  await client.post('/api/blogs', {
    data: {
      title,
      date,
      author,
      slug,
      content: body,
      tags: tagIds
    }
  })

}

const readMd = (fileName) => {
  const postsDir = path.join(__dirname, 'blog/_posts/');
  const dirNames = fileName.split('/')
  const [year, month, day, name] = dirNames.slice(-4)
  const [slug, ] = name.split('.')
  const fileList = fs.readdirSync(postsDir)
  const file = fileList.filter(x => x.includes(slug))
  const foundFile = file.length > 0 ? file[0] : null
  if (!foundFile) {
    throw new Error(`File ${fileName} not found`)
  }
  return fs.readFileSync(path.join(postsDir, foundFile), 'utf8')
}
const addContent = []
const siteDirs = fs.readdirSync(siteDir)
const yearDirs = siteDirs.filter(x => /^[0-9]{4}$/.test(x))
for (const year of yearDirs) {
  let curYearDir = path.join(siteDir, year);
  const monthsDir = fs.readdirSync(curYearDir)
  for (const month of monthsDir) {
    let curMonthDir = path.join(curYearDir, month);
    const daysDir = fs.readdirSync(curMonthDir);
    for (const day of daysDir) {
      let curDayDir = path.join(curMonthDir, day);
      const files = fs.readdirSync(curDayDir);
      for (const file of files) {
        let curFile = path.join(curDayDir, file);
        const content = fs.readFileSync(curFile, 'utf8')
        const $ = cheerio.load(content, {
          xmlMode: false,
          decodeEntities: false,
        })
        const body = $('.jumbotron').html()
        const md=  readMd(curFile)
        const date = md.match(/date: (.*)/)[1]
        const title = md.match(/title: (.*)/)[1]
        const tags = md.match(/tags: (.*)/)[1]
        const author = md.match(/author: (.*)/)[1]
        const slug = file.split('.')[0]
        console.log('slug', slug)
        addContent.push({
          title,
          date,
          tags,
          author,
          slug,
          body
        })
      }
    }
  }
}

processPosts(addContent).then(() => {
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})