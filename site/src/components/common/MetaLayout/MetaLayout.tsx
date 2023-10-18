import { string, shape, any, InferProps } from 'prop-types'
import Head from 'next/head'
import React from 'react'

type MetaLayoutProps = {
  seo?: {
    title?: string
    description?: string
    image?: string | null
  }
  children: React.ReactNode
}

function MetaLayout({ seo, children }: MetaLayoutProps) {
  return (
    <>
      <Head>
        {seo?.title && (
          <>
            <title key="title">{seo?.title}</title>
            <meta property="og:title" content={seo?.title} key="og:title" />
            <meta name="twitter:title" content={seo.title} key="twitter:title" />
          </>
        )}

        {seo?.description && (
          <>
            <meta name="description" content={seo.description} key="description" />
            <meta property="og:description" content={seo.description} key="og:description" />
            <meta name="twitter:description" content={seo.description} key="twitter:description" />
          </>
        )}
        {seo?.image && (
          <>
            <meta property="og:image" content={seo.image} key="og:image" />
            <meta name="twitter:image" content={seo.image} key="twitter:image" />
          </>
        )}
      </Head>
      {children}
    </>
  )
}

export default MetaLayout
