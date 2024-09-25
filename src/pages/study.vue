<template>
  <div>
    <!-- 头部内容 -->
    <div class="relative">
      <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
      <div class="absolute bottom-0 left-0 w-full flex py-2 bg-gray-900 bg-opacity-40 z-20">
        <Container>
          <div class="flex justify-between w-full">
            <ul class="flex types text-white">
              <li class="active item">每日一课</li>
              <li class="item">精品微课</li>
              <li class="item">学习计划</li>
              <li class="item">优质专栏</li>
            </ul>
            <div class="flex items-center">
              <div class="relative bg-white rounded-6 pr-2 pl-4 h-full flex items-center mr-4">
                <input class="outline-none mr-2" type="text" placeholder="搜索课程" />
                <i class="i-ep-search"></i>
              </div>
              <div class="flex text-gray-50">
                <div class="mr-2 cursor-pointer hover:text-white">登录</div>
                |
                <div class="ml-2 cursor-pointer hover:text-white">注册</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../store/useThemeStore'
import type { SwiperItemType } from '@/components/types'
const store = useThemeStore()
import bg from '@/assets/images/bg.png'
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子4',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  }
]
</script>

<style lang="scss" scoped>
.types {
  .item {
    @apply px-4 py-1 rounded-6 bg-gray-100 bg-opacity-40 mr-2 cursor-pointer;
    &:hover {
      @apply bg-white text-dark-300;
    }
  }
  .active {
    @apply bg-white text-dark-300;
  }
}
.tabs {
  .active {
    @apply text-sky-400 relative;
    &::after {
      @apply absolute bg-sky-400 w-8 h-[2px] bottom-0 left-1/2 transform-translate-x--1/2;
      content: ' ';
    }
  }
}
</style>
<route lang="yaml">
meta:
  layout: default
</route>
