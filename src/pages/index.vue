<template>
  <div>home</div>
</template>

<script setup lang="tsx">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  updateSW()
})

const updateSW = registerSW({
  immediate: true,
  onRegisteredSW(url, registration) {
    console.log('Service Worker is registered', url, registration)
    setInterval(() => {
      registration && registration && registration.update()
    }, 36000)
  }
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
