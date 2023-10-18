/**
 * glossary service
 */

import { factories } from '@strapi/strapi'

const { createCoreService } = factories

module.exports = createCoreService('api::glossary.glossary')
