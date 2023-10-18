/**
 * config controller
 */

import { factories } from '@strapi/strapi'
const { createCoreController } = factories

module.exports = createCoreController('api::config.config')
