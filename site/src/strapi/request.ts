import axios, { AxiosRequestConfig } from 'axios'
import config from './config'

type RequestOpts = {
  url: string
  method?: AxiosRequestConfig['method']
  params?: AxiosRequestConfig['params']
  paramsSerializer?: any
  withToken?: boolean
}

const METHODS = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'] as const

type Method = typeof METHODS[number]

const sidedRequest = (opts: RequestOpts) => {
  const headers: AxiosRequestConfig['headers'] = {}

  if (opts.withToken) {
    headers.Authorization = `bearer ${config.TOKEN}`
  }

  return axios({ baseURL: `${config.API_URL}`, headers, ...opts })
}

const doRequest = (opts: RequestOpts) => {
  return sidedRequest(opts)
}

const request = METHODS.reduce((req, method) => {
  return { ...req, [method]: (opts: RequestOpts) => doRequest({ ...opts, method }) }
}, {} as Record<Method, (opts: RequestOpts) => ReturnType<typeof doRequest>>)

export default request
