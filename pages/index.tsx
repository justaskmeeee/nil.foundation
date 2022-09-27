import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';
import Banner from '../components/Banner/Banner';

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
            <ContactForm />
        </main>
    );
};

export default IndexPage;
