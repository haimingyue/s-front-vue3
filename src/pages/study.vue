<template>
  <div>
    <!-- 头部内容 -->
    <div>
      <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
    </div>
    <Container>
      <!-- 内容 -->
      <div class="flex w-full">
        <!-- 课程区域 -->
        <div class="bg w-1/2"></div>
        <div class="w-1/2">
          <div class="text-3xl">课程名称</div>
          <div class="text-gray-300 mb-4">课程描述</div>
          <div class="flex text-sm">
            <div>toimoc Brian</div>
            <div>前端大牛</div>
          </div>
          <div class="text-orange-400 mb-8">$499</div>
          <div class="flex">
            <div class="px-10 py-2 bg-sky-400 text-white hover:bg-sky-300">加入购物车</div>
            <div
              class="px-4 py-2 text-sky hover:(bg-gray-300 text-sky-500) border border-sky-400 text-sky-400"
            >
              收藏
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="w-full flex">
        <div class="w-3/4">
          <div>
            <ul class="flex">
              <li class="text-sky-400">课程介绍</li>
              <li>章节目录</li>
              <li>学院评价</li>
            </ul>
          </div>
          <div>
            <router-view></router-view>
          </div>
        </div>
        <div class="w-1/4">侧边栏</div>
      </div>
    </Container>
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

<style lang="scss" scoped></style>
