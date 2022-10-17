import { Layout } from '@nilfoundation/react-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from 'components/Common/Header/Header';
import Footer from 'components/Common/Footer/Footer';
import 'styles/index.scss';

/**
 * Custom App. Provides global styles and layout for all pages.
 *
 * @param {AppProps} props - Props.
 * @returns - React component.
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Layout
                header={<Header />}
                footer={<Footer />}
                stickyHeader
            >
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
