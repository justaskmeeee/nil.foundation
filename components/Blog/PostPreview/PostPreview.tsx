/**
 * @file React component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { ListGroup } from '@nilfoundation/react-components';
import Post from 'models/Blog/Post';
import distanceToNow from 'lib/dates/distanceToNow';

/**
 * Props.
 */
type PostProps = {
    post: Partial<Post>;
};

/**
 * Post component.
 *
 * @param {PostProps} props - Props.
 * @returns React component.
 */
const PostPreview = ({ post: { title, excerpt, date, slug } }: PostProps): JSX.Element => {
    console.log(slug);
    return (
        <ListGroup.Item href={`/blog/${slug}`}>
            <article>
                <header>
                    {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                    {excerpt ? <p dangerouslySetInnerHTML={{ __html: excerpt }} /> : null}
                    {date && <time className="text-muted">{distanceToNow(new Date(date))}</time>}
                </header>
            </article>
        </ListGroup.Item>
    );
};

export default PostPreview;
