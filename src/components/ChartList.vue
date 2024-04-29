<template>
  <div>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="chart in chartList"
        index="chart.chart_id"
        :key="chart.chart_id"
        draggable="true"
        @dragstart="dragStartHandler"
        class="chartItem"
      >
        <el-icon><icon-menu /></el-icon>
        <svg width="45px" height="45px" viewBox="0 0 175 138" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#409eff" fill-rule="nonzero" v-html="chart.svg"></g>
          </g>
        </svg>
        <span style="color:black;" :data-type="chart.chart_type" class="chartTitle">{{ chart.chinese }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { chartList } from "../assets/chartList.js";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const dragStartHandler=(e)=>{
//   console.log(e)
  e.dataTransfer.setData('html',e.target.innerHTML)
}
</script>

<style lang="scss" scoped>
.chartTitle {
  font-size: larger;
  margin-left: 20px;
}
</style>
