/**
 * @file Get post for blog helpers.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Post from 'models/Blog/Post';

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
export const getPostBySlug = (slug: string, fields: Array<keyof Post>): Partial<Post> => {
    const realSlug = slug.replace(new RegExp(`\.${markdownFilesExtension}$`), '');
    const fullPath = join(postsDirectory, `${realSlug}.${markdownFilesExtension}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    console.log(typeof data.date);

    const post = {} as Partial<Post>;

    // Ensure only the minimal needed data is exposed
    fields.forEach(field => {
        if (field === 'slug') {
            post[field] = realSlug;
            return;
        }

        if (field === 'content') {
            post[field] = content;
            return;
        }

        if (typeof data[field] !== 'undefined') {
            post[field] = data[field];
        }

        if ((field = 'date')) {
            post[field] = (data.date as Date | undefined)?.toJSON();
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
export const getAllPosts = (fields: Array<keyof Post>): Partial<Post>[] => {
    const slugs = getPostSlugs();

    return slugs.map(slug => getPostBySlug(slug, fields)).sort(postsDatesComparator);
};

/**
 * Posts by dates comparator. If date is undefined, keeps posts order.
 *
 * @param post1 Post1.
 * @param post2 Post2.
 * @returns Compare result.
 */
const postsDatesComparator = (post1: Partial<Post>, post2: Partial<Post>) => {
    if (!post1.date || !post2.date) {
        return 0;
    }
    return post1.date > post2?.date ? -1 : 1;
};
