import { ref } from 'vue'
import useNotification from '@/composables/useNotifications'

export function useLoading() {
  const isLoading = ref(false)
  const { toastError } = useNotification()

  function show(message = '', delay = 350) {
    setTimeout(() => {
      isLoading.value = true
    }, delay)
  }

  function hide() {
    isLoading.value = false
  }

  async function processWithLoading(
    callback: () => Promise<void>,
    params = {
      loadingMessage: 'Loading...', // Default loading message
      delay: 350,
      errorMessage: 'An error occurred', // Default error message
      throwOnError: false
    }
  ) {
    show(params.loadingMessage, params.delay)

    try {
      await callback()
    } catch (error) {
      if (error === 'dont_throw_error') return
      toastError({
        message: params.errorMessage
      })
      if (params.throwOnError === true) throw error
    } finally {
      hide()
    }
  }

  return { isLoading, show, hide, processWithLoading }
}

export default useLoading
