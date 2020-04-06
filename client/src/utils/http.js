import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api/v1'

const http = axios.create({
  baseURL: BASE_URL,
  headers: {},
})

http.init = () => {}

export default http
