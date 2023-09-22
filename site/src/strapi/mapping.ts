import dayjs from 'dayjs'
import { Blog } from '../../../admin/src/api/blog/content-types/blog/blog'
import { getAttribute, getAttributes, processHtml } from './utils'
import { Tag, Tag_Plain } from '../../../admin/src/api/tag/content-types/tag/tag'
import {
  MappedBlog,
  MappedBlogExtend,
  MappedCategory,
  MappedGlossary,
  MappedResearch,
  MappedTag,
} from './types/entities'
import { Category } from '../../../admin/src/api/category/content-types/category/category'
import { Researches } from '../../../admin/src/api/researches/content-types/researches/researches'
import config from './config'
import { Glossary } from '../../../admin/src/api/glossary/content-types/glossary/glossary'

export const mapBlogItem = (item: Blog): MappedBlog => {
  const { id, attributes: at } = item

  return {
    id,
    title: at.title || '',
    subtitle: at.subtitle || '',
    author: at.author || '',
    slug: at.slug || '',
    date: dayjs(at.date).format('DD MMM YYYY'),
    tags: at.tags?.data.map((tag) => mapTag(tag)) || [],
    category: at.category?.data ? mapCategory(at.category.data) : null,
    isFeature: at.isFeature || false,
  }
}

export const mapBlogItemExtend = (item: Blog): MappedBlogExtend => {
  const imageUrl =
    item.attributes.share_image?.data?.attributes.url || item.attributes.generated_share_image?.data?.attributes.url
  return {
    ...mapBlogItem(item),
    content: processHtml(item.attributes.content),
    share_image: imageUrl ? `${config.STRAPI_URL}${imageUrl}` : null,
  }
}

export const mapTag = (tag: Tag): MappedTag => {
  return {
    name: tag.attributes.name || '',
    slug: tag.attributes.slug || '',
  }
}

export const mapCategory = (category: Category): MappedCategory => {
  return {
    name: category.attributes.name || '',
    slug: category.attributes.slug || '',
  }
}

export const mapResearch = (item: Researches): MappedResearch => {
  const { id, attributes: at } = item

  return {
    id,
    title: at.title || '',
    link: at.link || '',
    tags: at.tags?.data.map((tag) => mapTag(tag)) || [],
    author: at.author || '',
    date: dayjs(at.date).format('DD MMM YYYY'),
  }
}

export const mapGlossary = (item: Glossary): MappedGlossary => {
  const { id, attributes: at } = item

  return {
    id,
    letter: at.letter || '',
    word: at.word || '',
    slug: at.slug || '',
    description: at.description || '',
    paragraphs: at.paragraphs || [],
  }
}
