<template>
  <div class="about">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    About
    <Child :foo="['1', '2']" @update="handleUpdate"></Child>
  </div>
</template>

<script setup lang="ts">
const handleUpdate = (val: string) => {
  console.log(val)
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
