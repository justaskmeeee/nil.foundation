import { REVALIDATE } from 'constants/common';
import { getCollection } from 'src/strapi';

import BlogPage from 'pages/BlogsPage';
import MetaLayout from 'components/MetaLayout';

import { seoData } from 'stubs/blogs';

const Blogs = ({ cms, seo }) => (
  <MetaLayout seo={seo}>
    <BlogPage data={cms} />
  </MetaLayout>
);

export async function getStaticProps() {
  const [posts, tags, categories] = await Promise.all([
    getCollection('blogs'),
    getCollection('tags'),
    getCollection('categories'),
  ]);

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts,
        tags,
        categories,
      },
      seo: seoData,
    },
  };
}

export default Blogs;
