import { client } from './client'
import config from './config'
import { Config } from './types/Config'

const defaultConfig = {
  isGlossaryOn: false,
  isReserachTagsOn: false,
}

export const getSiteConfig = async (): Promise<Config> => {
  if (config.USE_MOCK) {
    return defaultConfig
  }
  try {
    const res = await client.get<{ data?: { attributes: Config } }>('/config')
    if (!res?.data?.data?.attributes) throw new Error('No config found')
    return res.data.data.attributes
  } catch (e) {
    console.error(e)
    return defaultConfig
  }
}
