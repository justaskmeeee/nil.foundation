/**
 * @file Post type declaration.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

/**
 * Blog post model.
 */
interface Post {
    /**
     * Post content.
     */
    content: string;
    /**
     * Post tags.
     */
    tags: string[];
    /**
     * Post author.
     */
    author: string;
    /**
     * Post fileName.
     */
    slug: string;
    /**
     * Post short description.
     */
    excerpt: string;
    /**
     * Post title.
     */
    title: string;
    /**
     * Post date.
     */
    date: string;
    /**
     * Enable comments.
     */
    comments: boolean;
}

export default Post;
