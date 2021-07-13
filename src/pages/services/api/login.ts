import { requets } from '../../../utils/http'

export const login = (data: API.LoginParam) =>
  requets({
    url: '/login',
    method: 'post',
    data,
  })
