import { rebuildSinglePost, rebuildSingleWord } from './rebuildCollection'
import { CollectionType } from './types/CollectionType'

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
