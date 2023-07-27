import { REVALIDATE } from 'constants/common';
import WordPage from 'pages/WordPage/WordPage';
import { getSingleBySlug, getAllPath } from 'src/strapi';
import MetaLayout from 'components/MetaLayout/MetaLayout';

const Word = ({ data }) => {
  return (
    <MetaLayout
      seo={{
        title: `zk Term ${data.word}`,
        description: 'Zero-knowledge term and definition',
      }}
    >
      <WordPage data={data} />
    </MetaLayout>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const words = await getSingleBySlug('glossaries', slug, {
    paragraphs: {
      populate: '*',
    },
  });

  if (!words) {
    return {
      notFound: true,
    };
  }

  return {
    revalidate: REVALIDATE,
    props: {
      data: words,
    },
  };
}

export async function getStaticPaths() {
  const words = await getAllPath('glossaries');

  const paths = words.map(word => ({
    params: { slug: word.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Word;
