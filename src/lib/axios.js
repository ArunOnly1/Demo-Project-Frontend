import axios from 'axios'

export const $axios = axios.create({
  baseURL: 'http://localhost:5000/api',

  timeout: 1000,
})

// TODO:refresh token ko kaam garna baaki xa
$axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accesstoken')
  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`
  }
  return config
})
