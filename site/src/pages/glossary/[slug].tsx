import { REVALIDATE } from 'constants/common'
import WordPage from 'pages/WordPage/WordPage'
import { getSingleBySlug, getAllPath, getSiteConfig } from 'src/strapi'
import MetaLayout from 'components/MetaLayout/MetaLayout'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Glossary } from 'entities/Glossary'

const Word = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MetaLayout
      seo={{
        title: `zk Term ${data.word}`,
        description: 'Zero-knowledge term and definition',
      }}
    >
      <WordPage data={data} />
    </MetaLayout>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug ?? ''
  const [words, config] = await Promise.all([
    getSingleBySlug<Glossary>('glossaries', slug, {
      paragraphs: {
        populate: '*',
      },
    }),
    getSiteConfig(),
  ])

  if (!words) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: words,
      config,
    },
  }
}

export async function getStaticPaths() {
  const words = await getAllPath<Glossary>('glossaries')

  const paths = words.map((word) => ({
    params: { slug: word.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Word
