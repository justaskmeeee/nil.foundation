// read all directories in the posts directory

var fs = require('fs');
var path = require('path');
const cheerio = require('cheerio');
const axios = require('axios')

var siteDir = path.join(__dirname, 'blog/_site/');
const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    'Authorization': 'beare ' + process.env.API_TOKEN,
  }
})

const addTagIfNot = async (tag) => {
  const tags = await client.get('/api/tags')

}

const uploadPost = async (title, date, tags, author, slug, body) => {
  const splittedTags = tags.split(' ').map(x => x.trim()).filter(x => x.length > 0)
  await client.post('/api/blog', {
    data: {
      title,
      date,
      author,
      slug,
      body
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

const prefixPath = ['2021', '2022', '2023']
for (const year of prefixPath) {
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
        const slug = curFile.split('.')[0]
        console.log(body, 'title', title, 'date', date, 'tags', tags, 'author', author, 'slug', slug)
      }
    }
  }
}
