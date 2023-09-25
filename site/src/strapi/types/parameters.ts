export type StrapiParamters = {
  sort?: string | Array<string>
  filters?: Record<string, unknown>
  populate?: string | Record<string, unknown> | Array<string>
  pagination?: {
    page?: number
    limit?: number
    pageSize?: number
  }
}
