<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
        <h1 class="title">🍔ChartKitchen</h1>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">导出数据</el-menu-item>
    <el-sub-menu index="2">
      <template #title>其他操作</template>
      <el-menu-item index="2-1">使用说明</el-menu-item>
      <el-menu-item index="2-2">示例代码</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>选择LLMs</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.title{
    font-size: 3rem;
    font-weight: 1000;
}
</style>
