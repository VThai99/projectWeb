import axios from 'axios'

const APIFile = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'blob',
})

APIFile.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem('access_token')
      if (token) {
        // config.headers['Content-Type'] = 'multipart/form-data'
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => Promise.reject(error),
)

export default APIFile
