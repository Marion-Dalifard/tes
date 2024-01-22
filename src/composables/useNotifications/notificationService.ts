import { ref } from 'vue'

const notifications = ref([])

export function useNotificationService() {
  function addNotification(notification) {
    notifications.value.push(notification)
    // Remove the notification after its timeout
    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n !== notification)
    }, notification.timeout)
  }

  return { notifications, addNotification }
}

export default useNotificationService
