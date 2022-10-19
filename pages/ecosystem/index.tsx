/**
 * @file Next page.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import type { NextPage } from 'next';
import { Col, Container, Row } from '@nilfoundation/react-components';
import Head from 'next/head';
import products from 'components/Ecosystem/ProductCard/productsConfig';
import ProductCard from 'components/Ecosystem/ProductCard/ProductCard';

/**
 * Index page.
 *
 * @returns NextPage.
 */
const IndexPage: NextPage = () => {
    return (
        <Container as="main">
            <Head>
                <title>=nil; Foundation - Ecosystem</title>
            </Head>
            <Row>
                {products.map(x => (
                    <Col
                        key={x.title}
                        xs={12}
                        sm={4}
                    >
                        <ProductCard {...x} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IndexPage;
