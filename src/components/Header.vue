<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="数据项预览"
    width="500"
    align-center
  >
    <span>{{ chartdata }}</span>
    <data-panel :data="chartdata" copyable expanded="true"></data-panel>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="outputData">
          导出
        </el-button>
      </div>
    </template>
  </el-dialog>

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
    <el-menu-item @click="handleMenuItemClick" index="1">导出数据</el-menu-item>
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
import { ref } from "vue"
import DataPanel from "./DataPanel.vue"
import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
let centerDialogVisible = ref(false)

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

import { useCompChart } from '../store/CompChart.js'
  
  const store = useCompChart()
  let chartdata = ref(store.compChart)
  function handleMenuItemClick() {
        centerDialogVisible.value = true;
        updateChartData();
    };
function updateChartData(){
  console.log("重新获取一次chartdata");
  chartdata = ref(store.compChart);
}
function outputData(){
  console.log("成功下载！");
  
  // 将 JSON 数据转换为字符串
const jsonString = JSON.stringify(chartdata);
// 创建 Blob 对象
const blob = new Blob([jsonString], { type: 'application/json' });
// 创建链接
const url = URL.createObjectURL(blob);
// 创建下载链接
const a = document.createElement('a');
a.href = url;
a.download = 'data.json';

// 模拟点击下载
a.click();

// 释放链接
URL.revokeObjectURL(url);

// ElMessage({
//     message: 'json文本下载成功！',
//     type: 'success',
//   })
  ElNotification({
    title: 'Success',
    message: 'json文本下载成功！',
    type: 'success',
  })
  
}


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
