import { defineStore } from "pinia";

export const useCompChart = defineStore({
    id:'compChart',
    state:()=>({
        compChart:{
            chart1:'',
            chart2:'',
            composition_pattern:''
        }
    }),
    actions:{
        updateChart(data) {
          // 如果 this.compChart 是字符串，直接返回
          if (typeof this.compChart === 'string') {
              return this.compChart;
          }
          
          // 如果 this.compChart 是一个对象，继续递归
          if (typeof this.compChart === 'object' && this.compChart !== null) {
              // 初始化变量用于跟踪是否替换过
              let replaced = false;
              
              // 遍历对象的所有属性
              for (let key in this.compChart) {
                  // 如果属性值是对象，则递归调用此函数
                  if (typeof this.compChart[key] === 'object' && this.compChart[key] !== null) {
                      this.compChart[key] = this.updateChart.call({ compChart: this.compChart[key] }, data);
                  } else if (this.compChart[key] === 'MORE') { // 如果属性值是 'MORE'，则替换为传入的 data
                      this.compChart[key] = data;
                      replaced = true; // 标记替换过
                  }
              }
              
              // 如果替换过，返回修改后的对象；否则，返回原对象
              if (replaced) {
                  return this.compChart;
              } else {
                  return this.compChart;
              }
          }
          
          // 如果不是对象也不是字符串，返回原值
          return this.compChart;
        }
    }
})