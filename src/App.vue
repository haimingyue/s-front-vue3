<script setup lang="ts">
import { useThemeStore } from './store/useThemeStore'

const themeStroe = useThemeStore()
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  const contentWidth = 1200

  themeStroe.$patch({
    rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
  })
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
