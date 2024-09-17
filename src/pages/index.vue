<template>
  <div>
    <swiper :items="items" height="36rem"></swiper>
  </div>
</template>

<script setup lang="tsx">
import { registerSW } from 'virtual:pwa-register'
import type { SwiperItemType } from '@/components/types'
import bg from '@/assets/images/bg.png'

onMounted(() => {
  updateSW()
})

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  }
]

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
