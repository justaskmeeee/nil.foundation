import { string, shape, any } from 'prop-types';
import Head from 'next/head';

import React from 'react';

const MetaLayout = ({ seo, children }) => (
  <>
    <Head>
      {seo?.title && (
        <>
          <title>{seo?.title}</title>
          <meta
            property="og:title"
            content={seo?.title}
          />
          <meta
            name="twitter:title"
            content={seo.title}
          />
        </>
      )}

      {seo?.description && (
        <>
          <meta
            name="description"
            content={seo.description}
          />
          <meta
            property="og:description"
            content={seo.description}
          />
          <meta
            name="twitter:description"
            content={seo.description}
          />
        </>
      )}
    </Head>
    {children}
  </>
);

MetaLayout.propTypes = {
  children: any,
  seo: shape({
    title: string,
    description: string,
  }),
};

export default MetaLayout;
