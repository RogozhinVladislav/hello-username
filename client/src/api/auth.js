import http from '../utils/http'

export const login = payLoad => http.post('/auth/login', payLoad)
export const register = payLoad => http.post('/auth/register', payLoad)