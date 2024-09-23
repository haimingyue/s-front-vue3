<template>
  <div>
    <ul class="flex justify-evenly items-center w-full">
      <li
        :class="[
          'flex flex-col items-center cursor-pointer transition-all text-gray-400 hover:text-orange group',
          { active: activeIndex === index }
        ]"
        v-for="(item, index) in titles"
        :key="index"
        @click="
          () => {
            swiperRef.slideTo(index, 500)
            activeIndex = index
          }
        "
      >
        <div class="text-2xl border-b-2 pb-2 px-2 group-hover:border-b-color-orange line">
          {{ index + 1 }}
        </div>
        <div class="pt-4 text">{{ item }}</div>
      </li>
    </ul>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :style="{ height: (width / 1200) * height + 'px' }"
      :modules="modules"
      :navigation="{ prevEl: '.prev', nextEl: '.next' }"
      :pagination="{
        clickable: true,
        bulletClass: 'inline-block w-3 h-3 rounded-1/2 bg-gray-300 z-20 mr-4 cursor-pointer',
        bulletActiveClass: 'w-8! bg-orange rounded-3'
      }"
      loop
      v-bind="$attrs"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item">
          <div
            class="w-full h-full bg-contain bg-no-repeat bg-center-top"
            :style="{ backgroundImage: `url(${item})` }"
          ></div>
        </slot>
      </swiper-slide>
      <div v-if="!$attrs.pagination_hide">
        <div
          class="rounded-1/2 bg-white shadow-lg w-15 h-15 absolute left-2 top-1/2 transform-translate-y--1/2 z-30 border flex justify-center items-center group cursor-pointer"
        >
          <div
            class="prev i-ep:arrow-left font-bold text-gray-300 group-hover:text-gray-700"
            style="font-size: 2rem"
          ></div>
        </div>
        <div
          class="rounded-1/2 bg-white shadow-lg w-15 h-15 absolute right-2 top-1/2 transform-translate-y--1/2 z-30 flex justify-center items-center group cursor-pointer"
        >
          <div
            class="next i-ep:arrow-right font-bold text-gray-300 group-hover:text-gray-700"
            style="font-size: 2rem"
          ></div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperRef = ref()
const activeIndex = ref(0)

onMounted(() => {
  console.log(swiperRef.value)
})

const props = defineProps({
  height: {
    type: Number,
    default: 1200
  },
  items: {
    type: Array as PropType<Array<String>>,
    default: () => []
  },
  titles: {
    type: Array as PropType<Array<String>>,
    default: () => []
  }
})

const modules = [Navigation, Pagination]

const emits = defineEmits(['change'])

const { width } = useWindowSize()

// function getClassAndStyle(str: string) {
//   // props.height
//   // 如果height的值包含rem,em,px，则返回 {string: str, class: ''}
//   // 如果height的值包含h-，则返回 {string: '', class: str}
//   return {
//     style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
//     class: /h-/.test(props.height) ? str : ''
//   }
// }

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}
const onSlideChange = (e: any) => {
  emits('change', e)
  console.log('2', e)
  activeIndex.value = e.realIndex
}
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
.active {
  .line {
    color: orange;
    border-color: orange;
  }
  .text {
    color: orange;
  }
}
</style>
