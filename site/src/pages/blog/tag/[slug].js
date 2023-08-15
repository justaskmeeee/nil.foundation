import { REVALIDATE, BLOG_PAGE_SIZE, BLOG_POST_SORT } from 'constants/common';
import { getAllPath, getCollection, getCollectionAndMeta, getSiteConfig } from 'src/strapi';

import BlogPage from 'pages/BlogsPage';
import MetaLayout from 'components/MetaLayout';

import { seoData } from 'stubs/blogs';

const Blogs = ({ cms, seo }) => (
  <MetaLayout seo={seo}>
    <BlogPage data={cms} />;
  </MetaLayout>
);

export async function getStaticProps({ params: { slug } }) {
  const [posts, tags, categories, config] = await Promise.all([
    getCollectionAndMeta('blogs', {
      sort: BLOG_POST_SORT,
      filters: {
        tags: {
          name: {
            $eq: slug,
          },
        },
      },
      pagination: {
        page: 1,
        pageSize: BLOG_PAGE_SIZE,
      },
    }),
    getCollection('tags'),
    getCollection('categories'),
    getSiteConfig()
  ]);

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts: posts.blogs,
        tags,
        categories,
        meta: posts.meta,
      },
      seo: seoData,
      config,
    },
  };
}

export async function getStaticPaths() {
  const tags = await getAllPath('tags');

  const paths = tags.map(tag => ({
    params: { slug: tag.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Blogs;
