import showdown from 'showdown'
import config from './config'
import { Tag } from 'entities/tag'

const converter = new showdown.Converter()

export const getSingleFile = (image: any) => {
  if (!image || !image.data) return null

  const { url, formats, caption, mime, height, width, alternativeText } = image.data.attributes

  const newFormats: Record<string, any> = {}

  if (formats) {
    formats.forEach((item: any) => {
      newFormats[item] = {
        media: item,
        src: `${config.STRAPI_URL}${item.url}`,
      }
    })
  }

  return {
    url: `${config.STRAPI_URL}${url}` || '',
    caption: caption || '',
    mime: mime || '',
    height: height || '',
    width: width || '',
    srcSet: newFormats || null,
    alt: alternativeText || '',
    // type: getFileType(ext),
  }
}

export const getAttributes = <T>(data: any): T | null => {
  if (!data.data) return null

  const items = data.data

  return items.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes,
    }
  })
}

export const getAttribute = <T>(data: any): T | null => {
  if (!data) return null

  return {
    id: data.id,
    ...data.attributes,
  }
}

export const getHtml = (data: any): string | null => {
  const text = String(data).replace(/"\/uploads/g, `"${process.env.STRAPI_URL}/uploads`)

  return text ? converter.makeHtml(text) : null
}

export const getCurrentTags = (data: any): Tag[] | null => {
  if (!data) return null

  const allTags = data.map((item: any) => item.tags).flat()

  const currentTags = [...new Set<Tag>(allTags.map((tag: Tag) => tag.name))]

  return currentTags
}
