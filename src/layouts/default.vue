<template>
  <div>
    <div class="flex">
      <router-link to="/">产品</router-link>
      <a href="https://www.imooc.com" target="_target">社区</a>
      <router-link to="/study">学习</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
