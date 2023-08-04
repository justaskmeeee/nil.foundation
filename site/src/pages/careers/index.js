import MetaLayout from 'components/MetaLayout/MetaLayout';
import { REVALIDATE } from 'constants/common';

import Careers from 'pages/Careers';

import { careersPageData, seoData } from 'stubs/careersPageData';

const CareersPage = ({ data, seo }) => (
  <MetaLayout seo={seo}>
    <Careers data={data} />
  </MetaLayout>
);

export async function getStaticProps() {
  return {
    props: { data: careersPageData, seo: seoData },
    revalidate: REVALIDATE,
  };
}

export default CareersPage;
