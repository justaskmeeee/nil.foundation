import { REVALIDATE } from 'constants/index';

import About from 'pages/About';
import MetaLayout from 'components/MetaLayout';

import { aboutPageData, seoData } from 'stubs/aboutPageData';

const AboutPage = ({ data, seo }) => (
  <MetaLayout seo={seo}>
    <About data={data} />
  </MetaLayout>
);

export async function getStaticProps() {
  return {
    props: { data: aboutPageData, seo: seoData },
    revalidate: REVALIDATE,
  };
}

export default AboutPage;
