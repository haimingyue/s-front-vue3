<template>
  <div>
    <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
    <Container>
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in projects"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-0 transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1) card"
            :icon="item.icon"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4 more">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in lessons"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">课程项目展示</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
        </div>
      </div>
    </Container>
    <Container class="w-full text-gray-400">
      <Swiper
        :items="items"
        :height="28 * store.rate + 'rem'"
        class="w-2/3"
        @change="handleSwiperChange"
      ></Swiper>
      <div class="w-1/3 bg-coolgray-700 self-stretch flex flex-col justify-center px-4">
        <a :href="selectItem.url" target="_blank">
          <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
          <div class="text-sm">{{ selectItem.subTitle }}</div>
          <div class="flex items-center justify-between mb-4">查看更多</div>
          <div class="i-mdi:arrow-right-thin text-4xl"></div>
        </a>
      </div>
    </Container>
    <Container>
      <div class="text-2xl font-bold mt-8">合作伙伴</div>
    </Container>
    <Container>
      <FreeSwiper :items="partners"></FreeSwiper>
    </Container>
    <Container class="py-4">
      <div class="w-2/3 h-[400px]">
        <div class="grid grid-cols-4 grid-rows-3 h-full gap-4 p-4">
          <div class="border col-start-1 col-span-4 row-start-1 row-span-1">1</div>
          <div class="border col-start-1 col-span-2 row-start-2 row-span-2">2</div>
          <div class="border col-start-3 col-span-2 row-start-2 row-span-1">3</div>
          <div class="border col-start-3 col-span-1 row-start-3 row-span-1">4</div>
          <div class="border col-start-4 col-span-1 row-start-3 row-span-1">5</div>
        </div>
      </div>
      <div class="w-1/3 self-stretch flex flex-col justify-center">
        <div class="text-2xl font-bold pb-4">讲师团队</div>
        <div class="text-sm text-gray-400">
          <p>一线大厂、资深技术大牛10名</p>
          <p>技术专家不定期坐镇直播间</p>
          <p>前端、Java、Python工程师对应不同用户开发需求</p>
          <p>年薪百万不是梦，加入我们!</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '../store/useThemeStore'

import front from '@/assets/lessons/front-end.jpeg'
import nestjs from '@/assets/lessons/nestjs.jpeg'
import small from '@/assets/lessons/6.jpeg'
import project from '@/assets/lessons/project.jpeg'
import book from '@/assets/lessons/book.jpeg'
import blog from '@/assets/lessons/blog.png'
import type Swiper from 'swiper'

const store = useThemeStore()

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

const projects = [
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    icon: 'i-mdi:web'
  }
]

const lessons = [
  {
    title: '前端高级工程师（大前端）',
    subTitle: '“技术成长&职业破局”双高体系,深度打通“全栈 + 全流程 +多端+ 提效+AI赋能”',
    url: 'https://class.imooc.com/sale/fesenior',
    image: front
  },
  {
    title: '互联网人副业指南',
    subTitle: '专为互联网人打造，超越市面大多副业课，从0到1掌握副业成功密码',
    url: 'https://coding.imooc.com/class/598.html',
    image: project
  },
  {
    title: 'NestJS 入门到实战',
    subTitle: '近几年快速发展的Node.js框架，掌握未来前端工程师后端开发能力',
    url: 'https://coding.imooc.com/class/617.html',
    image: nestjs
  },
  {
    title: '六大场景 梳理开发痛点',
    subTitle: '摸清大前端成长之路 梳理开发痛点 解锁前端进阶路',
    url: 'https://coding.imooc.com/class/514.html',
    image: small
  },
  {
    title: 'toimc 电子书平台',
    subTitle: '大前端高级进阶，电子书平台，服务于课程内容',
    url: 'https://coding.imooc.com/class/617.html',
    image: book
  },
  {
    title: 'toimc 博客',
    subTitle: '热爱技术的发烧友，前端技术狂热者',
    url: 'https://www.toimc.com',
    image: blog
  }
]

const partners = ref([
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'
])

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})

const selectItem = ref(items[0])

function handleSwiperChange(e: Swiper) {
  const index = e.activeIndex
  console.log('index', index)
  selectItem.value = items[index]
}
</script>

<style scoped lang="scss">
:deep(.card) {
  &:hover {
    p,
    .more {
      color: white;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
