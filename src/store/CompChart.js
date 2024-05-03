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
            // 递归函数，替换对象中的 "MORE" 为 data
            function replaceMore(obj, data) {
                // 如果 obj 是字符串，直接返回
                if (typeof obj === 'string') {
                    return obj;
                }
                
                // 如果 obj 是一个对象，继续递归
                if (typeof obj === 'object' && obj !== null) {
                    // 初始化变量用于跟踪是否替换过
                    let replaced = false;
                    
                    // 遍历对象的所有属性
                    for (let key in obj) {
                        // 如果属性值是对象，则递归调用此函数
                        if (typeof obj[key] === 'object' && obj[key] !== null) {
                            obj[key] = replaceMore(obj[key], data);
                        } else if (obj[key] === 'MORE') { // 如果属性值是 'MORE'，则替换为传入的 data
                            obj[key] = data;
                            replaced = true; // 标记替换过
                        }
                    }
                    
                    // 如果替换过，返回修改后的对象；否则，返回原对象
                    if (replaced) {
                        return obj;
                    } else {
                        return obj;
                    }
                }
                
                // 如果不是对象也不是字符串，返回原值
                return obj;
            }
            
            // 替换 "MORE"，如果没有找到，就将整个 compChart 替换为 data
            const updatedChart = replaceMore(this.compChart, data);
            if (!updatedChart.hasOwnProperty('MORE')) {
                this.compChart = data;
            } else {
                this.compChart = updatedChart;
            }
            
            console.log("this.compChart::",this.compChart);
        }
    }
});
