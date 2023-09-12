import { InferType, number, shape, string } from 'prop-types'

export const tag = shape({
  id: number,
  name: string,
  slug: string,
  createdAt: string,
  publishedAt: string,
  updatedAt: string,
}).isRequired

export type Tag = InferType<typeof tag>
