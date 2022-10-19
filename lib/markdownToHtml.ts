/**
 * @file Markdown to html helper.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { remark } from 'remark';
import html from 'remark-html';

/**
 * Converts markdown to HTML format.
 *
 * @param markdown - Markdown.
 * @returns - String.
 */
const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
};

export default markdownToHtml;
