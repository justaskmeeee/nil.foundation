import MetaLayout from 'components/MetaLayout/MetaLayout'
import { REVALIDATE } from 'constants/common'

import Careers from 'pages/Careers'

import { careersPageData, seoData } from 'stubs/careersPageData'
import { getSiteConfig } from 'src/strapi'
import { InferGetStaticPropsType } from 'next'

const CareersPage = ({ data, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <Careers data={data} />
  </MetaLayout>
)

export async function getStaticProps() {
  const config = await getSiteConfig()
  return {
    props: { data: careersPageData, seo: seoData, config },
    revalidate: REVALIDATE,
  }
}

export default CareersPage
