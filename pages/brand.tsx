import { Anchor, Col, Container, Row } from '@nilfoundation/react-components';
import type { NextPage } from 'next';
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
                <title>=nil; Foundation - Brand</title>
            </Head>
            <Row>
                <Col xs={12}>
                    <h1>
                        <Anchor
                            href="#styleguide"
                            iconName="fa-solid fa-hashtag"
                        >
                            <code>=nil;</code>Foundation styleguide
                        </Anchor>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h1>
                        <Anchor
                            href="#assets"
                            iconName="fa-solid fa-hashtag"
                        >
                            Assets
                        </Anchor>
                    </h1>
                </Col>
            </Row>
        </Container>
    );
};

export default IndexPage;
