import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../models/Post';

const postsDirectory = join(process.cwd(), '_posts');
const markdownFilesExtension = 'md';

/**
 * Gets content of postsDirectory.
 *
 * @returns Content of postsDirectory.
 */
export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory);
};

/**
 * Creates post object from slug.
 *
 * @param slug - Slug.
 * @param fields - Fields.
 * @returns - Post.
 */
export const getPostBySlug = (slug: string, fields: Array<keyof Post>): Post => {
    const realSlug = slug.replace(new RegExp(`\.${markdownFilesExtension}$`), '');
    const fullPath = join(postsDirectory, `${realSlug}.${markdownFilesExtension}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post = {} as Post;

    // Ensure only the minimal needed data is exposed
    fields.forEach(field => {
        if (field === 'slug') {
            post[field] = realSlug;
        }

        if (field === 'content') {
            post[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            post[field] = data[field];
        }
    });

    return post;
};

/**
 * Get all avialiable posts in postsDirectory.
 *
 * @param fields - Fields.
 * @returns - Posts.
 */
export const getAllPosts = (fields: Array<keyof Post>): Post[] => {
    const slugs = getPostSlugs();

    return slugs
        .map(slug => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
