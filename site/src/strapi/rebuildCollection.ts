import dayjs from 'dayjs'
import { getAttribute, getAttributes, getHtml } from './utils'

export const rebuildList = <T>(data: any): T[] => {
  return data.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes,
    }
  })
}

export const rebuildBlog = (data: any) => {
  return data.map((item: any) => {
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
  })
}

export const rebuildBlogAndMeta = (data: any) => {
  const blogs = data.data.map((item: any) => {
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
  })

  return { blogs, meta: data.meta.pagination }
}

export const rebuildResearch = (data: any) => {
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

export const rebuildSinglePost = (data: any) => {
  const { id, attributes: at } = data

  return {
    id,
    title: at.title || '',
    description: at.subtitle || '',
    author: at.author || '',
    slug: at.slug || null,
    date: dayjs(at.date).format('DD MMM YYYY'),
    tags: getAttributes(at.tags),
    category: getAttribute(at.category?.data) || null,
    content: getHtml(at.content) || null,
    recommendedPosts: rebuildBlog(at.recommendedBlogs.data) || null,
  }
}

export const rebuildGlossaries = (data: any) => {
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
