import { string, shape, any } from 'prop-types'
import Head from 'next/head'

import React from 'react'

const MetaLayout = ({ seo, children }) => (
  <>
    <Head>
      {seo?.title && (
        <>
          <title key='title'>{seo?.title}</title>
          <meta property='og:title' content={seo?.title} key='og:title' />
          <meta name='twitter:title' content={seo.title} key='twitter:title' />
        </>
      )}

      {seo?.description && (
        <>
          <meta name='description' content={seo.description} key='description' />
          <meta property='og:description' content={seo.description} key='og:description' />
          <meta name='twitter:description' content={seo.description} key='twitter:description' />
        </>
      )}
    </Head>
    {children}
  </>
)

MetaLayout.propTypes = {
  children: any,
  seo: shape({
    title: string,
    description: string,
  }),
}

export default MetaLayout
