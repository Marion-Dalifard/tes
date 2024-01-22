import axios from 'axios'
import qs from 'qs'
import interceptors from '@/api/interceptors'
import { useSettingsStore } from '@/stores/settings'

export const httpInitializer = () => {
  console.log(useSettingsStore())
  const client = axios.create({
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
    baseURL: useSettingsStore().ADN_API_URL
  })

  interceptors(client)

  return client
}
