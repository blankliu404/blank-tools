<template>
  <div class="custom-config">
    <el-row>
      <el-col :span="23">
        <el-switch
          v-model="autoStart"
          inline-prompt
          active-text="是"
          inactive-text="否"
          @change="autoStartValChange"
        />&ensp; 是否设置开机自动启动
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const autoStart = ref(false)

setTimeout(() => {
  window.api.getSystemConfig('AUTO_START').then((res) => {
    if (res && res.value) {
      autoStart.value = res.value
    }
  })
}, 1000)

const autoStartValChange = (val) => {
  console.log(autoStart.value, val)
}
</script>
