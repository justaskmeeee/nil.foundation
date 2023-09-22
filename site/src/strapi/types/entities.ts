import { Tag_Plain } from '../../../../admin/src/api/tag/content-types/tag/tag'
import { Paragraphs } from '../../../../admin/src/components/word/interfaces/Paragraphs'

export type MappedTag = {
  name: string
  slug: string
}

export type MappedCategory = {
  name: string
  slug: string
}

export type MappedBlog = {
  id: number
  title: string
  subtitle: string
  author: string
  slug: string
  date: string
  tags: MappedTag[]
  category: MappedCategory | null
  isFeature: boolean
}

export type MappedBlogExtend = MappedBlog & {
  content: string
  share_image: string | null
}

export type MappedResearch = {
  id: number
  title: string
  link: string
  author: string
  date: string
  tags: MappedTag[]
}

export type MappedGlossary = {
  id: number
  letter: string
  word: string
  slug: string
  description: string
  paragraphs: Paragraphs[]
}
