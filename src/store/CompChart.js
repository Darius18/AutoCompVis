import { defineStore } from "pinia";

export const useCompChart = defineStore({
    id:'compChart',
    state:()=>({
        compChart:{
            boxID:1,
            chart1:'',
            chart2:'',
            composition_pattern:''
        }
    }),
    actions: {
        updateChart(data,box_id) {
            console.log("更新了chart数据");
            console.log("更新的数据：",data);
            console.log("目标box：",box_id)
            // 递归函数，替换对象中的 "MORE" 为 data
            // let testdata={
            //     boxID:1,
            //     chart1:'pieeeeee',
            //     chart2:'MORE',
            //     composition_pattern:''
            // }
            if(box_id===1){
                //说明是初始的box
                console.log("this.compChart111",this.compChart);
                this.compChart=data;
                console.log("this.compChart",this.compChart);
            }else{
                let tempBox=this.compChart;
                let key;//存放MORE的键
                //说明至少是第二个box

                //先定位到tempbox
                for(let i=2;i<box_id;i++){
                    for(let j in tempBox){
                        if(tempBox[j] instanceof Object){
                            tempBox=tempBox[j]
                            break;
                        }
                    }
                }
                //再在tempbox中找MORE
                //出现undefined的原因是没有找到MORE
                for(let j in tempBox){
                    if(tempBox[j]==='MORE'){
                        key=j;
                        break;
                    }else{
                        if(tempBox[j] instanceof Object){
                            key=j;
                            break;
                        }
                    }
                }
                console.log("本次找到的tempbox：",tempBox);
                console.log("本次找到的key：",key);
                //把key替换成data
                tempBox[key]=data;
                console.log("this.compChart",this.compChart);
            }

        }
    }
});
