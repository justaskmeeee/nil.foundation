import { Col, Container, Row } from '@nilfoundation/react-components';
import { useRef } from 'react';
import { Post } from '../../../models/Post';
import distanceToNow from '../../../lib/dates/distanceToNow';

/**
 * Props.
 */
type PostProps = {
    post: Post;
};

/**
 * Post component.
 *
 * @param {PostProps} props - Props.
 * @returns React component.
 */
const Post = ({ post }: PostProps): JSX.Element => {
    return (
        <article>
            <header>
                <h1>{post.title}</h1>
                {post.excerpt ? <p className="mt-2 text-xl">{post.excerpt}</p> : null}
                <time className="text-muted">{distanceToNow(new Date(post.date))}</time>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
};

export default Post;
