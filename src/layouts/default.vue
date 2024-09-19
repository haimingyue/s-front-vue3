<template>
  <div class="fixed top-0 w-full z-50" :class="{ 'bg-black bg-opacity-30 shadow-lg': y > 30 }">
    <container>
      <img src="/100-100.png" class="w-14 h-full lt-sm:mx-auto" alt="" />
      <div
        @click="() => toggle()"
        class="i-ic-round-menu text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white"
      ></div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </container>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>
    <div class="mobile-hide">default footer</div>
    <div class="mobile-footer mobile">
      <MobileNavbar></MobileNavbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll()

const [show, toggle] = useToggle(false)
const flag = ref(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    flag.value = false
    toggle(true)
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style lang="scss" scoped>
.i-ic-round-menu {
  display: none;
}
@media (max-width: 639.9px) {
  .i-ic-round-menu {
    display: block;
  }
}

.mobile-footer {
  display: none;
}
</style>
