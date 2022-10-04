import { Col, Collapse, Container, Row } from '@nilfoundation/react-components';
import { useRef } from 'react';
import { Post } from '../../../models/Post';
import distanceToNow from '../../../lib/dates/distanceToNow';

/**
 * Props.
 */
type PostsProps = {
    allPosts: Post[];
};

/**
 * Post component.
 *
 * @param {PostsProps} props - Props.
 * @returns React component.
 */
const Posts = ({ allPosts }: PostsProps): JSX.Element => {
    return <div />;
};

export default Posts;
