import Axios, { AxiosRequestConfig } from 'axios'

type Paramskeys = 'get' | 'delete' | 'head' | 'options'

type Bodykeys = 'post' | 'put' | 'patch'

interface RequestOptions {
  url: string
  method: Paramskeys | Bodykeys
  data?: any
  config?: AxiosRequestConfig
}

interface Request {
  (options: RequestOptions): Promise<any>
}

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 30000,
})

export const requets: Request = ({ url, method, data = {}, config = {} }) => {
  const bodyMethods = ['post', 'put', 'patch']
  let params: [string, AxiosRequestConfig] | [string, any, AxiosRequestConfig]
  if (bodyMethods.includes(method)) {
    params = [url, data, config]

    return instance[method as Bodykeys].apply(null, params)
  }
  params = [
    url,
    {
      ...config,
      params: data,
    },
  ]
  return instance[method as Paramskeys].apply(null, params)
}
