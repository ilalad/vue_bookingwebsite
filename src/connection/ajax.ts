import { BASE_API } from '@/constants/connection'
import axios from 'axios'
import store from '@/store'

const ajax = axios.create({
  baseURL: BASE_API,
  timeout: 20000,
  withCredentials: true
  // FIXME: not working
  // headers: {
  //   'Accept-Language': 'en-US,en;q=0.5',
  //   'Content-Type': 'application/json'
  // }
})

ajax.interceptors.request.use(
  config => {
    store.commit('loading/loading', true)
    return config
  },
  error => {
    store.commit('loading/loading', false)
    return Promise.reject(error)
  }
)
ajax.interceptors.response.use(
  response => {
    store.commit('loading/loading', false)
    return response
  },
  error => {
    store.commit('loading/loading', false)
    return Promise.reject(error)
  }
)

export { ajax }
