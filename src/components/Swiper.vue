<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <!-- -->
      <slot :item="item">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.image})` }">
          <container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4">
              <p class="lt-sm:text-xl text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-32 h-16 z-30"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 2rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 2rem"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { SwiperItemType } from './types'

const props = defineProps({
  height: {
    type: String,
    default: 'h-80'
  },
  items: {
    type: Array as PropType<SwiperItemType[]>,
    default: () => {}
  }
})

function getClassAndStyle(str: string) {
  // 如果height包含rem, em, px 则返回{string: str, class: ''}
  // 如果height包含h-, 则返回{string: ''. class: str}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}

const emits = defineEmits(['change'])

const modules = [Navigation, Pagination]

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = (e: any) => {
  emits('change', e)
}
</script>

<style lang="scss" scoped>
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
