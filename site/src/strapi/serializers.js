import {
  rebuildList,
  rebuildSinglePost,
  rebuildBlog,
  rebuildResearch,
} from './rebuildCollection';

export const serializeList = (data, type) => {
  switch (type) {
    case 'blogs':
      return rebuildBlog(data);
    case 'research':
      return rebuildResearch(data);
    default:
      return rebuildList(data);
  }
};

export const serializeSingle = (data, type) => {
  switch (type) {
    case 'blogs':
      return rebuildSinglePost(data);
    default:
      return {
        id: data.id,
        ...data.attributes,
      };
  }
};
