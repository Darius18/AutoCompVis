<template>
    <div class="visBlock">
        <div class="bigblock">
            {{ message }}
            <div class="chart droppable">
                chart1
            </div>
            <div class="chart droppable">
                chart2
            </div>
            <div class="compositePattern droppable">
                compositePattern
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onUpdated, onMounted, defineProps, getCurrentInstance } from 'vue'
import { useCompChart } from '../store/CompChart.js'
const { emit } = getCurrentInstance();

let props = defineProps({
    message: Boolean
})
let frameData = {
    chart1: "",
    chart2: "",
    compositePattern: ""
}


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
            let targetID = e.currentTarget.id
            let getChart = e.dataTransfer.getData("html");
            let getComposition = e.dataTransfer.getData("html_composition");
            if (getChart != "") {
                console.log("从chartlist中移过来的");

                block.innerHTML = getChart;
                const type = block.querySelector("span").dataset.type;
                frameData[targetID] = type;
                if (type === 'MORE') {
                    console.log("触发新增节点！！");
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
                console.log(block);
            }
            console.log(frameData);
            CompStore.updateChart(frameData);
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