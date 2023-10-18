/**
 * glossary router
 */
import { factories } from '@strapi/strapi'
const { createCoreRouter } = factories

module.exports = createCoreRouter('api::glossary.glossary')
