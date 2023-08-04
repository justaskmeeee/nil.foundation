import { getCollectionAndMeta } from 'src/strapi';

export default async function handler(req, res) {
  try {
    const newData = await getCollectionAndMeta('blogs', {
      sort: 'date:desc',
      filters: req.body.filters,
      pagination: {
        page: req.body.page,
        pageSize: 10,
      },
    });
    res.json(newData);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
