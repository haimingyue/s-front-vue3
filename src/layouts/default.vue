import type { PropType from 'vue';
<template>
  <div
    class="fixed top-0 w-full z-50 transition-all duration-300 h-0"
    :class="[{ 'lt-sm:(bg-black h-full)': show }]"
  >
    <div :class="[{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }]">
      <container>
        <img src="/100-100.png" class="w-14 h-full lt-sm:mx-auto" alt="" />
        <div
          @click="() => toggle()"
          :class="[
            'icon-wrap text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white'
          ]"
        >
          <Transition name="rotate-icon" mode="out-in">
            <div v-if="show" class="i-maki:cross"></div>
            <div v-else class="i-ic-round-menu"></div>
          </Transition>
        </div>
        <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
      </container>
    </div>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>
    <div class="mobile-hide">
      <DefaultFooter></DefaultFooter>
    </div>
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
.icon-wrap {
  display: none;
}
@media (max-width: 639.9px) {
  .icon-wrap {
    display: block;
  }
}
.mobile-footer {
  display: none;
}
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
