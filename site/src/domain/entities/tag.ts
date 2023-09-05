import { InferType, number, shape, string } from 'prop-types'

export const Tag = shape({
  id: number,
  name: string,
  slug: string,
  createdAt: string,
  publishedAt: string,
  updatedAt: string,
})

export type Tag = InferType<typeof Tag>;
