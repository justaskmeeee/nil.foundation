/**
 * @file Custom _app.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Layout, NotificationProvider, Spinner } from '@nilfoundation/react-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from 'components/Common/Header/Header';
import Footer from 'components/Common/Footer/Footer';
import { useRouteChanging } from 'hooks/useRouteChanging';
import 'styles/index.scss';

/**
 * Custom App. Provides global styles and layout for all pages.
 *
 * @param {AppProps} props - Props.
 * @returns - React component.
 */
function MyApp({ Component, pageProps }: AppProps) {
    const routeCahnging = useRouteChanging();

    return (
        <NotificationProvider>
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
                {routeCahnging && <Spinner grow />}
                <Component {...pageProps} />
            </Layout>
        </NotificationProvider>
    );
}

export default MyApp;
