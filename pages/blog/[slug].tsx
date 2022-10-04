import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Container } from '@nilfoundation/react-components';
import { getAllPosts, getPostBySlug } from '../../lib/getPost';
import markdownToHtml from '../../lib/markdownToHtml';
import distanceToNow from '../../lib/dates/distanceToNow';
import { GetStaticPaths, GetStaticProps } from 'next';

/**
 * Post page.
 *
 * @param postPageProps - Props.
 * @returns NextPage.
 */
const PostPage = ({ post }: any) => {
    const { isFallback } = useRouter();

    if (!isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Container>
            <Head>
                <title>=nil; Foundation - Blog | {post.title}</title>
            </Head>

            {isFallback ? (
                <div>Loading…</div>
            ) : (
                <div>
                    <article>
                        <header>
                            <h1 className="text-4xl font-bold">{post.title}</h1>
                            {post.excerpt ? <p className="mt-2 text-xl">{post.excerpt}</p> : null}
                            <time className="flex mt-2 text-gray-400">
                                {distanceToNow(new Date(post.date))}
                            </time>
                        </header>

                        <div
                            className="prose mt-10"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                </div>
            )}
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
