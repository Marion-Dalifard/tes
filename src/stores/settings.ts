import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    ADN_API_URL: 'http://localhost:5000'
  }),
  actions: {
    async initialize() {
      const settings = await (await fetch('/settings.json')).json()

      this.ADN_API_URL = settings['ADN_API_URL']
    }
  }
})
