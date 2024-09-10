<template>
  <el-container>
    <com-common-close />
    <el-card class="custom-card">
      <template #header>
        <div class="drag">
          <span>设置</span>
        </div>
      </template>
      <el-scrollbar class="custom-card-body"></el-scrollbar>
    </el-card>
  </el-container>
</template>

<script lang="ts" setup>
import ComCommonClose from '../components/ComCommonClose.vue'
</script>

<style lang="less">
.custom {
  &-card {
    width: 100%;
    border-radius: 8px;

    &-body {
      height: calc(100vh - 100px);
    }
  }
}
</style>
