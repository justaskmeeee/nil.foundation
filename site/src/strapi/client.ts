import axios, { InternalAxiosRequestConfig } from 'axios'
import config from './config'

export const client = axios.create({
  baseURL: `${config.API_URL}`,
})

client.interceptors.request.use((configInterception: InternalAxiosRequestConfig) => {
  configInterception.headers.authorization = `bearer ${config.TOKEN}`
  return configInterception
})
