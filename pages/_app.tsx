import { Layout } from '@nilfoundation/react-components';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

/**
 * Custom App. Provides global styles and layout for all pages.
 *
 * @param {AppProps} props - Props.
 * @returns - React component.
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout
            header={<Header />}
            footer={<Footer />}
        >
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
