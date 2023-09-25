'use strict'

/**
 * blog controller
 */

import { factories } from '@strapi/strapi'
const { createCoreController } = factories

module.exports = createCoreController('api::blog.blog')
