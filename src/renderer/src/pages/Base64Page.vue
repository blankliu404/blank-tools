<template>
  <el-container>
    <com-common-close />
    <el-card class="custom-card">
      <template #header>
        <div class="custom-card-header drag">
          <span>编解码</span>
        </div>
      </template>
      <el-scrollbar class="custom-card-body">
        <el-tabs type="border-card" tab-position="top" class="custom-tab">
          <el-tab-pane label="Base64">base64</el-tab-pane>
        </el-tabs>
      </el-scrollbar>
    </el-card>
  </el-container>
</template>

<script lang="ts" setup>
import ComCommonClose from '../components/ComCommonClose.vue'
</script>
