import { REVALIDATE } from 'constants/common';

import Research, { ResearchLayout } from 'pages/research/index';
import MetaLayout from 'components/MetaLayout';

import { getCollection } from 'src/strapi';
import { seoData } from 'stubs/researchCards';

const ResearchPage = ({ cms, seo }) => (
  <MetaLayout seo={seo}>
    <Research data={cms} />
  </MetaLayout>
);

ResearchPage.getLayout = page => {
  const tags = page?.props?.cms?.tags ?? [];
  return <ResearchLayout tags={tags}>{page}</ResearchLayout>;
};

export async function getStaticProps() {
  const [posts, tags] = await Promise.all([
    getCollection('research', {
      tags: {
        populate: '*',
      },
    }),
    getCollection('tags', {
      filters: {
        research: {
          id: {
            $notNull: true,
          },
        },
      },
    }),
  ]);

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts,
        tags,
      },
      seo: seoData,
    },
  };
}

export default ResearchPage;
