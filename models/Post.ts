/**
 * Blog post model.
 */
export type Post = {
    slug?: string;
    content: string;
    title?: string;
    excerpt?: string;
    date: `${number}-${number}-${number}`;
    tags?: string;
    author?: string;
};
