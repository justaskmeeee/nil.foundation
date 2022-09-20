import { Col, Container, Row } from '@nilfoundation/react-components';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Custom 404 page.
 *
 * @returns NextPage.
 */
export default function Custom404() {
    return (
        <Container as="main">
            <Head>
                <title>=nil; Foundation - Page not found</title>
            </Head>
            <Row className="text-center">
                <Col>
                    <h1>Page not found.</h1>
                </Col>
                <Col>
                    <Link href="/">
                        <a>Back to main</a>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
