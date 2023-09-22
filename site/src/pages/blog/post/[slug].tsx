import PostPage from 'pages/PostPage'
import MetaLayout from 'components/MetaLayout'

import { getAllPath, getBlogPostBySlug, getBlogPosts, getSiteConfig } from 'src/strapi'

import { REVALIDATE } from 'constants/common'

import { postPage } from 'stubs/postPageData'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Blog } from '../../../../../admin/src/api/blog/content-types/blog/blog'

const Post = ({ data, recommendedPosts, content }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={{ title: data.title, description: data.subtitle, image: data.share_image }}>
    <PostPage post={data} recommendedPosts={recommendedPosts} content={content} />
  </MetaLayout>
)

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug ?? ''
  const [posts, article, config] = await Promise.all([
    getBlogPosts({
      filters: {
        $or: [
          {
            slug: {
              $notIn: slug,
            },
          },
        ],
      },
      sort: ['date:desc'],
      pagination: {
        limit: 3,
      },
    }),
    getBlogPostBySlug(slug),
    getSiteConfig(),
  ])

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: article,
      recommendedPosts: posts,
      content: postPage,
      config,
    },
  }
}

export async function getStaticPaths() {
  const articles = await getAllPath<Blog>('blogs')

  const paths = articles.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Post
