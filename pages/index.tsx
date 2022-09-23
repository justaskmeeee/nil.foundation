import type { NextPage } from 'next';
import { Col, Container, Row } from '@nilfoundation/react-components';
import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';

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
            <ContactForm />
        </main>
    );
};

export default IndexPage;
