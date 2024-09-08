<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.api.openPage((value) => {
    router.push(value)
  })
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
@import './assets/index.less';
</style>
