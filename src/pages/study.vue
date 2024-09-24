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
    <div class="bg-gray-100">
      <div class="bg-white py-10 mb-4">
        <Container>
          <!-- 内容 -->
          <div class="flex w-full">
            <!-- 课程区域 -->
            <div class="bg w-1/2"></div>
            <div class="w-1/2">
              <div class="text-3xl">课程名称</div>
              <div class="text-gray-300 mb-4 line-clamp-3">12312312</div>
              <div class="flex text-sm">
                <div class="text-gray-300 pr-2">toimoc Brian |</div>
                <div class="text-gray-300 pl-2">前端大牛</div>
              </div>
              <div class="text-orange-400 mb-8 text-2xl">￥499</div>
              <div class="flex">
                <div class="btn mr-4">加入购物车</div>
                <div class="px-10 btn-plain">收藏</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div class="w-full flex">
          <div class="w-3/4 bg-white mr-4">
            <div class="border-b-1 border-b-color-gray-1">
              <ul class="flex">
                <li class="active px-4 py-2 cursor-pointer">课程介绍</li>
                <li class="px-4 py-2 cursor-pointer">章节目录</li>
                <li class="px-4 py-2 cursor-pointer">学院评价</li>
              </ul>
            </div>
            <div class="p-4">
              <router-view></router-view>
            </div>
          </div>
          <div class="w-1/4">
            <div class="bg-white mb-2 h-20">侧边栏</div>
            <div class="bg-white mb-2 h-20">侧边栏</div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../store/useThemeStore'
import type { SwiperItemType } from '@/components/types'
const store = useThemeStore()
import bg from '@/assets/images/bg.png'
import { Pagination } from 'swiper/modules'
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
