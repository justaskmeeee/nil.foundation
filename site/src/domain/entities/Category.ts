import { InferType, number, shape, string } from 'prop-types'

export const category = shape({
  id: number.isRequired,
  name: string.isRequired,
  slug: string.isRequired,
  creataAt: string.isRequired,
  publishedAt: string.isRequired,
  updatedAt: string.isRequired,
}).isRequired

export type Category = InferType<typeof category>
