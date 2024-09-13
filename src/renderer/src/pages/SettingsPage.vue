<template>
  <el-container>
    <com-common-close />
    <el-card class="custom-card">
      <template #header>
        <div class="custom-card-header drag">
          <span>设置</span>
        </div>
      </template>
      <el-scrollbar class="custom-card-body">
        <el-tabs tab-position="left" class="custom-tab">
          <el-tab-pane label="系统"><system-config /></el-tab-pane>
          <el-tab-pane label="编解码">Config</el-tab-pane>
        </el-tabs>
      </el-scrollbar>
    </el-card>
  </el-container>
</template>

<script lang="ts" setup>
import ComCommonClose from '../components/ComCommonClose.vue'
import SystemConfig from '../components/SystemConfig.vue'
</script>
