import dayjs from 'dayjs'
import { getAttribute, getAttributes, processHtml } from './utils'
import { Blog } from '../../../admin/src/api/blog/content-types/blog/blog'
import { Researches } from '../../../admin/src/api/researches/content-types/researches/researches'
import { Glossary, Letter } from '../../../admin/src/api/glossary/content-types/glossary/glossary'
import { Category } from '../../../admin/src/api/category/content-types/category/category'

export const rebuildBlog = (item: Blog) => {
  const { id, attributes: at } = item

  return {
    id,
    title: at.title || '',
    description: at.subtitle || '',
    author: at.author || '',
    slug: at.slug || null,
    date: dayjs(at.date).format('DD MMM YYYY'),
    tags: getAttributes(at.tags),
    category: getAttribute(at.category?.data) || null,
    isFeature: at.isFeature || false,
  }
}

export const rebuildResearch = (data: Researches[]) => {
  return data.map((item: any) => {
    const { id, attributes: at } = item

    return {
      id,
      title: at.title || '',
      author: at.author || '',
      date: dayjs(at.date).format('DD MMM YYYY'),
      link: at.link || null,
      tags: getAttributes(at.tags),
    }
  })
}

export const rebuildSinglePost = (data: Blog) => {
  const { id, attributes: at } = data

  return {
    id,
    title: at.title || '',
    subtitle: at.subtitle || '',
    author: at.author || '',
    slug: at.slug || null,
    date: dayjs(at.date).format('DD MMM YYYY'),
    tags: getAttributes(at.tags),
    category: getAttribute(at.category?.data) || null,
    content: processHtml(at.content),
  }
}

export const rebuildGlossaries = (data: Glossary[]) => {
  return data.map((item: any) => {
    const { attributes: at } = item

    return {
      letter: at.letter || '',
      word: at.word || '',
      slug: at.slug || '',
      description: at.description || '',
      paragraphs: at.paragraphs || null,
    }
  })
}

export const rebuildSingleWord = (data: any) => {
  const { id, attributes: at } = data

  return {
    id,
    word: at.word || '',
    description: at.description || '',
    paragraphs: at.paragraphs || null,
  }
}
