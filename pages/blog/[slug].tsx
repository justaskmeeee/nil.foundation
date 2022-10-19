/**
 * @file Next page.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container, Jumbotron, Spinner } from '@nilfoundation/react-components';
import { getAllPosts, getPostBySlug } from 'lib/getPost';
import markdownToHtml from 'lib/markdownToHtml';
import distanceToNow from 'lib/dates/distanceToNow';
import Post from 'models/Blog/Post';

/**
 * Props.
 */
type PostPageProps = {
    post: Post;
};

/**
 * Post page.
 *
 * @param {PostPageProps} postPageProps - Props.
 * @returns NextPage.
 */
const PostPage = ({ post: { title, slug, excerpt, content, date } }: PostPageProps) => {
    const { isFallback } = useRouter();

    if (!isFallback && !slug) {
        return <ErrorPage statusCode={404} />;
    }

    console.log(date);

    return (
        <Container>
            <Head>
                <title>=nil; Foundation - Blog | {title}</title>
            </Head>
            <Jumbotron>
                {isFallback ? (
                    <div>
                        <Spinner grow />
                    </div>
                ) : (
                    <div>
                        <article>
                            <header>
                                <h1 className="text-4xl font-bold">{title}</h1>
                                {excerpt ? <p className="mt-2 text-xl">{excerpt}</p> : null}
                                <time className="flex mt-2 text-gray-400">
                                    {distanceToNow(new Date(date))}
                                </time>
                            </header>
                            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                        </article>
                    </div>
                )}
            </Jumbotron>
        </Container>
    );
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.slug) {
        return { props: {} };
    }

    if (Array.isArray(params.slug)) {
        params.slug = params.slug[0];
    }

    const post = getPostBySlug(params.slug, ['slug', 'title', 'excerpt', 'date', 'content']);

    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const getStaticPaths: GetStaticPaths = () => {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map(({ slug }) => {
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    };
};

export default PostPage;
