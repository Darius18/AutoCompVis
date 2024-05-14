<template>
    <div>
      <JsonViewer :value="chartdata"/>
    </div>
  </template>
  
  <script setup>
  import { useCompChart } from '../store/CompChart.js'
  import { ref, watch,reactive,defineProps } from 'vue'
  import {JsonViewer} from "vue3-json-viewer"
  import "vue3-json-viewer/dist/index.css";
  const store = useCompChart()
  const chartdata = defineProps({
    data:{
      require:true
    }
  })
  // reactive(store.compChart)
  console.log(typeof chartdata);
  
  // // 监听 store 中 compChart 的变化，更新 chartdata
  // watch(() => store.compChart, (newValue) => {
  //   chartdata.value = newValue
  // })
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  