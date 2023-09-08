import qs from 'qs'
import Req from './request'
import { serializeList, serializeSingle } from './serializers'
import { rebuildList } from './rebuildCollection'
import config from './config'
import { Collection, CollectionType } from './types/CollectionType'

export const getCollection = async (type: CollectionType, params = {}) => {
  if (config.USE_MOCK) {
    return []
  }

  const collection = await Req.GET({
    url: `/${type}/`,
    params: {
      populate: '*',
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  return serializeList(collection.data.data, type)
}

export const getCollectionAndMeta = async (type: Collection, params = {}) => {
  if (config.USE_MOCK) {
    return {
      [type]: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 1,
          total: 1,
          totalPages: 1,
        },
      },
    }
  }
  const collection = await Req.GET({
    url: `/${type}/`,
    params: {
      populate: '*',
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  return serializeList(collection.data, `${type}+meta`)
}

export const getSingle = async (type: CollectionType, params = {}) => {
  if (config.USE_MOCK) {
    return null
  }
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  return serializeSingle(document.data.data, type)
}

export const getSingleBySlug = async (type: CollectionType, slug: string, populate: any) => {
  if (config.USE_MOCK) {
    return null
  }
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  if (!document.data.data[0]) return null

  return serializeSingle(document.data.data[0], type)
}

export const getAllPath = async (type: CollectionType, params = {}) => {
  if (config.USE_MOCK) {
    return []
  }
  const collection = await Req.GET({
    url: `/${type}/`,
    params: {
      fields: ['id', 'slug'],
      pagination: {
        page: 1,
        pageSize: 100,
      },
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  })

  return rebuildList(collection.data.data)
}

export { getSiteConfig } from './getSiteConfig'
