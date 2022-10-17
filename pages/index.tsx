import type { NextPage } from 'next';
import Head from 'next/head';
import ContactSection from 'components/Main/ContactSection/ContactSection';
import Banner from 'components/Main/Banner/Banner';

/**
 * Index page.
 *
 * @returns NextPage.
 */
const IndexPage: NextPage = () => {
    return (
        <main>
            <Head>
                <title>=nil; Foundation</title>
            </Head>
            <Banner />
            <ContactSection />
        </main>
    );
};

export default IndexPage;
