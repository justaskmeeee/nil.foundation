'use strict'

/**
 * tag service
 */

import { factories } from '@strapi/strapi'
const { createCoreService } = factories

module.exports = createCoreService('api::tag.tag')
