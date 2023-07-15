import {
  rebuildList,
  rebuildSinglePost,
  rebuildBlog,
  rebuildResearch,
  rebuildBlogAndMeta,
} from './rebuildCollection';

export const serializeList = (data, type) => {
  switch (type) {
    case 'blogs':
      return rebuildBlog(data);
    case 'blogs+meta':
      return rebuildBlogAndMeta(data);

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
