<template>
  <el-button-group class="custom-win-button no-drag">
    <el-button text @click="minusWin">
      <el-icon><Minus /> </el-icon>
    </el-button>
    <el-button text @click="fullScreenWin"
      ><el-icon><FullScreen /></el-icon>
    </el-button>
    <el-button text @click="closeWin">
      <el-icon><Close /> </el-icon>
    </el-button>
  </el-button-group>
</template>

<script lang="ts" setup>
const minusWin = window.api.minusWin
const fullScreenWin = window.api.fullScreenWin
const closeWin = window.api.closeWin
</script>

<style lang="less">
.custom {
  &-win {
    &-button {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}
</style>
