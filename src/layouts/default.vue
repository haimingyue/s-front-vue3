<template>
  <div class="fixed top-0 w-full z-50" :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 30 }">
    <container>
      <img src="/100*100.png" class="w-14 h-full" alt="" />
      <Menu></Menu>
    </container>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll()
</script>

<style lang="scss" scoped></style>
