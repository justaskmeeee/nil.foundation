import { REVALIDATE } from 'constants/index';

import ZkLlvm from 'pages/ZkLlvm';
import MetaLayout from 'components/MetaLayout';

import { zkllvmPageData, seoData } from 'stubs/zkllvmPageData';

const ZkLlvmPage = ({ data, seo }) => (
  <MetaLayout seo={seo}>
    <ZkLlvm data={data} />
  </MetaLayout>
);

export async function getStaticProps() {
  return {
    props: { data: zkllvmPageData, seo: seoData },
    revalidate: REVALIDATE,
  };
}

export default ZkLlvmPage;
