import MetaLayout from 'components/MetaLayout/MetaLayout'
import { REVALIDATE } from 'constants/common'
import Glossary from 'pages/Glossary'
import { seoData } from 'stubs/glossaryPageData'
import { getGlossary, getSiteConfig } from 'src/strapi'
import { groupArrayByField } from 'utils/groupArrayByField'
import { InferGetStaticPropsType } from 'next'

const GlossaryPage = ({ cms, seo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MetaLayout seo={seo}>
      <Glossary data={cms.normalizedGlossary} />
    </MetaLayout>
  )
}

export async function getStaticProps() {
  const [glossary, config] = await Promise.all([
    // here generic should be
    getGlossary({
      populate: '*',
      sort: ['letter:asc'],
    }),
    getSiteConfig(),
  ])

  const normalizedGlossary = groupArrayByField(glossary, 'letter')

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        normalizedGlossary,
      },
      seo: seoData,
      config,
    },
  }
}

export default GlossaryPage
