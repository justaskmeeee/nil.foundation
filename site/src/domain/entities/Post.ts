import { InferType, arrayOf, bool, number, shape, string } from 'prop-types'
import { category } from './Category'
import { tag } from './tag'

export const post = shape({
  id: number,
  category: category,
  date: string,
  description: string,
  slug: string,
  author: string,
  title: string,
  isFeature: bool,
  tags: arrayOf(tag).isRequired,
  content: string.isRequired,
  recommendedPosts: arrayOf(
    shape({
      id: number,
      category: category,
      date: string,
      description: string,
      slug: string,
      author: string,
      title: string,
      isFeature: bool,
      tags: arrayOf(tag).isRequired,
      content: string,
    }).isRequired,
  ).isRequired,
}).isRequired

export type Post = InferType<typeof post>
