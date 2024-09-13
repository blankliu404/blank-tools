<template>
  <el-button-group size="large" class="custom-win-button">
    <el-button text @click="minusWin">
      <el-icon size="20"><Minus /> </el-icon>
    </el-button>
    <el-button text @click="fullScreenWin"
      ><el-icon size="20"><FullScreen /></el-icon>
    </el-button>
    <el-button text @click="closeWin">
      <el-icon size="20"><Close /> </el-icon>
    </el-button>
  </el-button-group>
</template>

<script lang="ts" setup>
const minusWin = window.api.minusWin
const fullScreenWin = window.api.fullScreenWin
const closeWin = window.api.closeWin
</script>
