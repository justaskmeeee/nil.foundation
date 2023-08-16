import fs from 'fs'
import flatten from 'lodash.flatten'
import { getAllPath } from 'src/strapi'

const pagesArr = [
  { type: 'blogs', url: '/blog/post' },
  { type: 'tags', url: '/blog/tag' },
]
const otherPaths = [{ url: 'careers/jobs' }]

const Sitemap = () => {}

export const getServerSideProps = async ({ res }) => {
  const staticPages = fs
    .readdirSync('src/pages')
    .filter((staticPage) => {
      return ![
        '.DS_Store',
        '_app.js',
        '_document.js',
        '404.js',
        'sitemap.xml.js',
        'robots.txt.js',
        'index.js',
        'components.js',
        'api',
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_BASE_URL}/${staticPagePath}`
    })

  const dynamicPages = await Promise.all(
    pagesArr.map(async (item) => {
      return getAllPath(`${item.type}`).then((re) => re.map((el) => `${item.url}/${el.slug}`))
    }),
  )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url.replace('.js', '')}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}

        ${flatten(dynamicPages)
          .map((el) => {
            return `
              <url>
                <loc>${process.env.NEXT_PUBLIC_BASE_URL}${el}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
          })
          .join('')}

          ${otherPaths
            .map(
              (el) => `
          <url>
            <loc>${process.env.NEXT_PUBLIC_BASE_URL}/${el.url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
          `,
            )
            .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
