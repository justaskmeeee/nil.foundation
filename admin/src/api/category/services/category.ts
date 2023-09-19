'use strict'

/**
 * category service
 */

import { factories } from '@strapi/strapi'
const { createCoreService } = factories

module.exports = createCoreService('api::category.category')
