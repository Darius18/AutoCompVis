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
import { ref, reactive, computed, watch, onUpdated, onMounted, defineProps } from 'vue'
let props = defineProps({
    message: Boolean
})
let frameData = {
    chart1: "",
    chart2: "",
    compositePattern: ""
}

function addID() {
    document.querySelectorAll(".droppable")[0].setAttribute('id', 'chart1')
    document.querySelectorAll(".droppable")[1].setAttribute('id', 'chart2')
    document.querySelectorAll(".droppable")[2].setAttribute('id', 'compositePattern')
}

function clearID() {
    document.querySelectorAll(".droppable").forEach(element => {
        element.removeAttribute('id');
    });
}

onMounted(() => {
    addID();
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
            let getChart = e.dataTransfer.getData("html");
            let targetID = e.currentTarget.id
            console.log("子组件：" + targetID);
            block.innerHTML = getChart;
            const type = block.querySelector("span").dataset.type;
            frameData[targetID] = type;
            console.log(frameData);
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
</style>