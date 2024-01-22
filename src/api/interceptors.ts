import type {
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import Router from '@/router'
import type ErrorData from '@/api/models/error-data.model'
import useNotification from '@/composables/useNotifications'

export interface IInterceptorsType {
  request: AxiosInterceptorManager<AxiosRequestConfig>
  response: AxiosInterceptorManager<AxiosResponse>
}

export default (http: AxiosInstance) => {
  http.interceptors.request.use((config) => {
    //A FAIRE
    const token = null
    if (token && config.headers) {
      // noinspection AllyPlainJsInspection
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  http.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const response = error.response
      const { toastError } = useNotification()

      if (!response) return Promise.reject(error)

      if (response.status === 401) {
        return Promise.reject(error)
      }

      if (response.status === 403) {
        await Router.push({ name: '403Page' })
      }

      if (response.status === 400) {
        const error = response.data as ErrorData
        if (error.code) {
          toastError({
            message: `errors. ${error.code.toLowerCase()} ${error.data ? 'errors.types.' + error.data.type + 'value :' + error.data.value : {}}`
          })
        }
        return Promise.reject('dont_throw_error')
      }
      return Promise.reject(error)
    }
  )
}
