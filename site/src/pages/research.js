import { REVALIDATE } from 'constants/common';

import Research from 'pages/Research';
import MetaLayout from 'components/MetaLayout';

import { getCollection, getSiteConfig } from 'src/strapi';
import { getCurrentTags } from 'src/strapi/utils';
import { seoData } from 'stubs/researchCards';

const ResearchPage = ({ cms, seo }) => (
  <MetaLayout seo={seo}>
    <Research data={cms} />
  </MetaLayout>
);

export async function getStaticProps() {
  const config = await getSiteConfig();
  const posts = await getCollection('research', {
    tags: {
      populate: '*',
    },
  });

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts,
        tags: getCurrentTags(posts),
      },
      seo: seoData,
      config,
    },
  };
}

export default ResearchPage;
