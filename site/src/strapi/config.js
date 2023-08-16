/* eslint-disable import/no-anonymous-default-export */
export default {
  API_URL: process.env.STRAPI_API_URL || '',
  BASE_URL: process.env.STRAPI_URL || '',
  IMAGE_URL: process.env.STRAPI_URL || '',
  VIDEO_URL: process.env.STRAPI_URL || '',
  TOKEN: process.env.STRAPI_API_KEY || '',
  USE_MOCK: !!process.env.USE_MOCK || false,
}
