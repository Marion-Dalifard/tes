<template>
  <div v-if="show" :class="['notification', typeClass]">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    message: String,
    timeout: Number
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    typeClass() {
      return `notification-${this.type}`
    }
  },
  mounted() {
    setTimeout(() => (this.show = false), this.timeout)
  }
}
</script>

<style>
.notification {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1000;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  transition: all 0.3s ease-in-out;
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notification-success {
  background-color: #48c774;
}

.notification-error {
  background-color: #f14668;
}

.notification-warning {
  background-color: #ffdd57;
}

.notification-info {
  background-color: #209cee;
}
</style>
