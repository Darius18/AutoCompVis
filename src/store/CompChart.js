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
    actions: {
        updateChart(data) {
            console.log("更新了chart数据");
            // 递归函数，替换对象中的 "MORE" 为 data

        }
    }
});
