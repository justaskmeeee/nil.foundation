/**
 * blog router
 */
import { factories } from '@strapi/strapi'
const { createCoreRouter } = factories

module.exports = createCoreRouter('api::blog.blog')
