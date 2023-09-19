'use strict'

/**
 * blog service
 */

import { factories } from '@strapi/strapi'
const { createCoreService } = factories


export default createCoreService('api::blog.blog')
