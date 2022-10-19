/**
 * @file React component..
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useMemo, useState } from 'react';
import { Col, Container, Jumbotron, ListGroup, Row } from '@nilfoundation/react-components';
import Post from 'models/Blog/Post';
import PostPreview from '../PostPreview/PostPreview';
import PostsToolbar from '../PostsToolbar/PostsToolbar';

/**
 * Props.
 */
type PostsContainerProps = {
    allPosts: Partial<Post>[];
};

/**
 * Post component.
 *
 * @param {PostsContainerProps} props - Props.
 * @returns React component.
 */
const PostsContainer = ({ allPosts }: PostsContainerProps): JSX.Element => {
    const [tags, setTags] = useState<string[]>([]);
    const [search, setSearch] = useState('');

    const filterdPosts = useMemo(
        () =>
            allPosts
                .filter(x => (tags.length ? x.tags?.some(y => tags.includes(y)) : true))
                .filter(x => x.title?.includes(search)),
        [allPosts, tags, search],
    );

    return (
        <Container>
            <Jumbotron>
                <Row>
                    <Col xs={12}>
                        <PostsToolbar />
                    </Col>
                    <Col xs={12}>
                        <ListGroup>
                            {filterdPosts.map(post => (
                                <PostPreview
                                    key={post.title}
                                    post={post}
                                />
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
};

export default PostsContainer;
