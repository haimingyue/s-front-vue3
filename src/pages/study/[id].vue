<template>
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
            <!-- <ul class="flex">
              <li class="active px-4 py-2 cursor-pointer">课程介绍</li>
              <li class="px-4 py-2 cursor-pointer">章节目录</li>
              <li class="px-4 py-2 cursor-pointer">学院评价</li>
            </ul> -->
            <Tabs :items="['课程介绍', '章节目录', '学员评价']" v-model="activeIndex"></Tabs>
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
</template>

<script setup lang="ts">
const activeIndex = ref(0)

provide('activeIndex', activeIndex)
// import { useParams } from '@/hooks'
// type Params = {
//   id: string
// }
</script>
