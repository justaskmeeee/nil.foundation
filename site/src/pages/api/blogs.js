import { getCollectionAndMeta } from 'src/strapi'
import { BLOG_PAGE_SIZE, BLOG_POST_SORT } from 'constants/common'

export default async function handler(req, res) {
  try {
    const newData = await getCollectionAndMeta('blogs', {
      sort: BLOG_POST_SORT,
      filters: req.body.filters,
      pagination: {
        page: req.body.page,
        pageSize: BLOG_PAGE_SIZE,
      },
    })
    res.json(newData)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
