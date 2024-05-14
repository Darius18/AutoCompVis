<template>
    <div class="visBlock">
        <div class="bigblock">
            {{ message }}
            <div class="chart droppable" id="chart1">
                chart1
            </div>
            <div class="chart droppable" id="chart2">
                chart2
            </div>
            <div class="compositePattern droppable" id="compositePattern">
                compositePattern
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onUpdated, onMounted, defineProps, getCurrentInstance } from 'vue'
import { useCompChart } from '../store/CompChart.js'
const { emit } = getCurrentInstance();
import { useBoxNum } from '@/store/BoxNum.js';
const BoxNum_store=useBoxNum()
const this_box_id=BoxNum_store.box_number;
//this_box_id作为这个box的标识符，会固定存在
let props = defineProps({
    message: Boolean,
    signToClean:Boolean //父组件发来这个清空的信号，如果为true则清空内容
})
console.log(props.signToClean);
// watch(()=>props.signToClean,(value)=>{
//     console.log("要清理了",value);
//     if(value){
//         document.querySelectorAll(".droppable").innerHTML=""
//     }
// })

function cleanBox(){
    console.log("要清理了cleanBoxcleanBoxcleanBoxcleanBoxcleanBoxcleanBoxcleanBox");
    document.querySelectorAll(".droppable").innerHTML=""
}
defineExpose({
    cleanBox
})

let frameData = {
    boxID:"",
    chart1: "",
    chart2: "",
    compositePattern: ""
}

frameData["boxID"] = this_box_id;

const CompStore = useCompChart()
onMounted(() => {
    let blocks = document.querySelectorAll(".droppable");
    blocks.forEach(block => {
        block.addEventListener("dragover", function (e) {
            e.preventDefault();
            block.style.backgroundColor = "#ecf5ff"
        })
        block.addEventListener("dragleave", function (e) {
            e.preventDefault();
            block.style.backgroundColor = "#007bff"
        });
        block.addEventListener("drop", function (e) {
            e.preventDefault();
            let targetID = e.currentTarget.id;
            let getChart = e.dataTransfer.getData("html");
            let getComposition = e.dataTransfer.getData("html_composition");
            if (getChart != "") {
                block.innerHTML = getChart;
                const type = block.querySelector("span").dataset.type;
                frameData[targetID] = type;
                if (type === 'MORE') {
                    emit('AddNode', true);
                }
            } else {
                console.log("从“复合模式”中移动过来的");
                //说明是从“复合模式”中移动过来的
                block.innerHTML = getComposition;
                // 获取新添加的 img 元素
                const imgElement = block.querySelector('.composition_img');

                // 设置 img 元素的宽度和高度
                imgElement.style.width = '50px';
                imgElement.style.height = '50px';
                imgElement.style.borderRadius = '10px'
                imgElement.style.marginRight='10px'
                let spanText = block.querySelector('span.title_composition').textContent;
                frameData['compositePattern']=spanText;
            }
            //更新当前的数据
            //把最新的数据更新到新的box中
            CompStore.updateChart(frameData,this_box_id);
        });
    })
})

</script>

<style lang="scss" scoped>
.visBlock {
    width: 300px;
    height: auto;
    padding: 10px;
    border: 1px solid #000000;
    // background-color: antiquewhite;
    color: #000000;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

}

.chart {
    width: 100%;
    border: 2px dashed skyblue;
    margin-bottom: 20px;
}

.compositePattern {
    width: 100%;
    border: 1px dashed blue;
}

.droppable {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    // color: black;
}

.compositePattern {
    height: fit-content;
    min-height: 60px;
    // display: flex;
    color: black;
    padding: 10px;
}

.title_composition {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
}
</style>