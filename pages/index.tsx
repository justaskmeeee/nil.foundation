import type { NextPage } from 'next';
import { Col, Container, Row } from '@nilfoundation/react-components';
import Head from 'next/head';

/**
 * Index page.
 *
 * @returns NextPage.
 */
const IndexPage: NextPage = () => {
    return (
        <Container as="main">
            <Head>
                <title>=nil; Foundation</title>
            </Head>
            <Row>
                <Col>Nil Foundation</Col>
            </Row>
        </Container>
    );
};

export default IndexPage;
