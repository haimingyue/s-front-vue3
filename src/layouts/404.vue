<template>
  <div>
    <h1>404</h1>
    <RouterView></RouterView>
    <button @click="handleBack">返回</button>
  </div>
</template>

<script setup lant="ts">
const router = useRouter()
const handleBack = () => {
  console.log('back')
  router.back()
}
</script>

<style lang="scss" scoped></style>
