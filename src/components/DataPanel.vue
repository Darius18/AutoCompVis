<template>
    <div>
      {{ chartdata }}
    </div>
  </template>
  
  <script setup>
  import { useCompChart } from '../store/CompChart.js'
  import { ref, watch } from 'vue'
  
  const store = useCompChart()
  const chartdata = ref(store.compChart)
  
  // 监听 store 中 compChart 的变化，更新 chartdata
  watch(() => store.compChart, (newValue) => {
    chartdata.value = newValue
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  