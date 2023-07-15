import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import 'styles/reset.scss';
import 'styles/globals.scss';

import 'utils/gsapRegister';

import Layout from 'components/Layout';

import useCalcVh from 'hooks/useCalcVh';

import { seo } from 'constants/seo';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useCalcVh();

  useEffect(() => {
    const handleRouteChange = url => {
      if (url === '/careers/jobs') {
        router.reload();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content={seo.description}
        />
        {/* TODO: add current keywords */}
        <meta
          name="keywords"
          content=""
        />
        <meta
          name="theme-color"
          content={seo.theme}
        />
        <meta
          property="og:title"
          content={seo.title}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:description"
          content={seo.description}
        />
        <meta
          property="og:url"
          content={`${seo.url}${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`${seo.url}${seo.image}`}
        />
        {/* TODO: add current creator */}
        <meta
          name="twitter:creator"
          content="@nil"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:domain"
          content={seo.url || ''}
        />
        <meta
          property="twitter:url"
          content={`${seo.url}${router.asPath}`}
        />
        <meta
          name="twitter:title"
          content={seo.title}
        />
        <meta
          name="twitter:description"
          content={seo.description}
        />
        <meta
          name="twitter:image"
          content={`${seo.url}${seo.image}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout withFooter={router.pathname !== '/404'}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
