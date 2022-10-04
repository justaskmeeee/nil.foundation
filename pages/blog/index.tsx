import { Col, Container, Row } from '@nilfoundation/react-components';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Posts from '../../components/Blog/Posts/Posts';
import { getAllPosts } from '../../lib/getPost';
import { Post } from '../../models/Post';

/**
 * Props.
 */
type BlogPageProps = {
    allPosts: Post[];
};

/**
 * Blog page.
 *
 * @param {BlogPageProps} props - Page props.
 * @returns NextPage.
 */
const BlogPage: NextPage<BlogPageProps> = ({ allPosts }: BlogPageProps) => {
    return (
        <Container as="main">
            <Head>
                <title>=nil; Foundation - Blog</title>
            </Head>
            <Row>
                <Col xs={12}>
                    <h1>Blog</h1>
                </Col>
            </Row>
            <Posts allPosts={allPosts} />
        </Container>
    );
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'date']);

    return {
        props: { allPosts },
    };
};

export default BlogPage;
