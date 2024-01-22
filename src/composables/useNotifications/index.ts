import { useNotificationService } from './NotificationService'

export function useNotification() {
  const { addNotification } = useNotificationService()

  function createNotification(type, message, timeout = 2000) {
    addNotification({ type, message, timeout })
  }

  function toastSuccess(message) {
    createNotification('success', message)
  }

  function toastError(message) {
    createNotification('error', message)
  }

  return {
    toastSuccess,
    toastError
  }
}

export default useNotification
