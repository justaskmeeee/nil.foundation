import showdown from 'showdown';
import config from './config';

const converter = new showdown.Converter();

export const getSingleFile = image => {
  if (!image || !image.data) return null;

  const { url, formats, caption, mime, height, width, alternativeText } =
    image.data.attributes;

  const newFormats = {};

  if (formats) {
    formats.forEach(item => {
      newFormats[item] = {
        media: item,
        src: `${config.STRAPI_URL}${item.url}`,
      };
    });
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
  };
};

export const getAttributes = data => {
  if (!data.data) return null;

  const items = data.data;

  return items.map(item => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
};

export const getAttribute = data => {
  if (!data) return null;

  return {
    id: data.id,
    ...data.attributes,
  };
};

export const getHtml = data => {
  const text = String(data).replace(
    /\/uploads/g,
    `${process.env.STRAPI_URL}/uploads`
  );

  return text ? converter.makeHtml(text) : null;
};

export const getCurrentTags = data => {
  if (!data) return null;

  const allTags = data.map(item => item.tags).flat();

  const currentTags = [...new Set(allTags.map(tag => tag.name))];

  return currentTags;
};
