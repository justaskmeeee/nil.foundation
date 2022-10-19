/**
 * @file Next page.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PostsContainer from 'components/Blog/PostsContainer/PostsContainer';
import { getAllPosts } from 'lib/getPost';
import Post from 'models/Blog/Post';

/**
 * Props.
 */
type BlogPageProps = {
    allPosts: Partial<Post>[];
};

/**
 * Blog page.
 *
 * @param {BlogPageProps} props - Page props.
 * @returns NextPage.
 */
const BlogPage: NextPage<BlogPageProps> = ({ allPosts }: BlogPageProps) => {
    return (
        <main>
            <Head>
                <title>=nil; Foundation - Blog</title>
            </Head>
            <PostsContainer allPosts={allPosts} />
        </main>
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
