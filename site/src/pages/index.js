import { REVALIDATE } from 'constants/index';

import Home from 'pages/Home';
import MetaLayout from 'components/MetaLayout';

import { homePageData, seoData } from 'stubs/homePageData';

const HomePage = ({ data, seo }) => {
  console.log('seo', seo)
  return <MetaLayout seo={seo}>
    <Home data={data} />
  </MetaLayout>
}

export async function getStaticProps() {
  return {
    props: {
      data: homePageData,
      seo: seoData,
    },
    revalidate: REVALIDATE,
  };
}

export default HomePage;
