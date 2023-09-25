import config from './config'
import { Tag } from 'entities/tag'

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

export const processHtml = (data: any): string => {
  const text = String(data).replace(/"\/uploads/g, `"${config.STRAPI_URL}/uploads`)

  return text || ''
}

export const getCurrentTags = (data: any): Tag[] | null => {
  if (!data) return null

  const allTags = data.map((item: any) => item.tags).flat()

  const currentTags = [...new Set<Tag>(allTags.map((tag: Tag) => tag.name))]

  return currentTags
}
