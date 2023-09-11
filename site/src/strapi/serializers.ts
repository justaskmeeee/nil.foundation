import {
  rebuildList,
  rebuildSinglePost,
  rebuildBlog,
  rebuildResearch,
  rebuildBlogAndMeta,
  rebuildGlossaries,
  rebuildSingleWord,
} from './rebuildCollection'
import { CollectionType } from './types/CollectionType'

export const serializeList = <T>(data: T, type: CollectionType) => {
  switch (type) {
    case 'blogs':
      return rebuildBlog(data)
    case 'blogs+meta':
      return rebuildBlogAndMeta(data)

    case 'research':
      return rebuildResearch(data)
    case 'glossaries':
      return rebuildGlossaries(data)
    default:
      return rebuildList(data)
  }
}

export const serializeSingle = (data: any, type: CollectionType) => {
  switch (type) {
    case 'blogs':
      return rebuildSinglePost(data)
    case 'glossaries':
      return rebuildSingleWord(data)
    default:
      return {
        id: data.id,
        ...data.attributes,
      }
  }
}
