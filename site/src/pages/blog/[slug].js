import PostPage from 'pages/PostPage';
import MetaLayout from 'components/MetaLayout';

import { getAllPath, getCollection, getSingleBySlug } from 'src/strapi';

import { REVALIDATE } from 'constants/common';

import { postPage } from 'stubs/postPageData';

const Post = ({ data, recommendedPosts, content }) => (
  <MetaLayout seo={{ title: data.title, description: data.description }}>
    <PostPage
      post={data}
      recommendedPosts={recommendedPosts}
      content={content}
    />
  </MetaLayout>
);

export async function getStaticProps({ params: { slug } }) {
  const [posts, articles] = await Promise.all([
    getCollection('blogs'),
    getSingleBySlug('blogs', slug, {
      tags: {
        populate: '*',
      },
      category: {
        populate: '*',
      },
    }),
  ]);

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: articles,
      recommendedPosts: posts,
      content: postPage,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getAllPath('blogs');

  const paths = articles.map(article => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Post;
