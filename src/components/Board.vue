<template>
        <el-button @click="addNode" type="primary" plain style="margin-bottom: 20px;">重置画板</el-button>
        已有节点 {{ visBlocks.length }} 个
  <div id="container">
    <VisBlock
      v-for="(visBlock, index) in visBlocks"
      :key="index"
      :id="visBlock.id"
      class="box"
      :style="{ top: visBlock.top, left: visBlock.left }"
      @AddNode="addNode"
    >
      Box {{ index + 1 }}
    </VisBlock>
  </div>
</template>
<script setup>
import { onMounted,isRef,ref, onUpdated,watchEffect,watch, nextTick } from 'vue'
import VisBlock from "@/components/VisBlock.vue";
import {jsPlumb} from "jsplumb";
let plumbIns;//实例
let common;//通用的连接样式
onMounted(() => {
    // let blocks=document.querySelectorAll(".box")
    // blocks.forEach(block=>{
    //     block.addEventListener("dragover",function (e) {
    //         let x = Number((e.currentTarget.id)[3])-1;
    //     })
    // })
    // 初始化jsPlumb
    plumbIns = jsPlumb.getInstance()
    plumbIns.ready(function () {
        console.log("ready！");
        //设置连接的默认值
        common = {
            isSource: true,
            isTarget: true,
            anchors: ["Right", "Left"],
            endpoint: ["Dot", { radius: 15 }],
            connector: [
                "Flowchart",
                {
                    stub: [10, 15],
                    gap: 3,
                    cornerRadius: 5,
                    alwaysRespectStubs: true,
                },
            ],
            paintStyle: { stroke: "#007bff", strokeWidth: 2 },
            hoverPaintStyle: { stroke: "#ff4500" },
            endpointStyle: { fill: "#007bff", outlineStroke: "#007bff" },
            connectorStyle: { stroke: "#007bff", strokeWidth: 2 },
            overlays: [["Arrow", { width: 10, length: 10, location: 1 }]],
        };

        // 连接两个div
        // plumbIns.connect(
        //     {
        //         source: "box1",
        //         target: "box2",
        //     },
        //     common
        // );

        // 设置连接容器
        plumbIns.setContainer("container");

        // 设置可拖动
        plumbIns.draggable(plumbIns.getSelector(".box"));

        // plumbIns.addEndpoint(
        //     "box3",
        //     {
        //         anchors: "Left",
        //     },
        //     common
        // );
        // plumbIns.addEndpoint(
        //     "box2",
        //     {
        //         anchors: "Right",
        //     },
        //     common
        // );

        plumbIns.bind("connection", function (info, originalEvent) {
            console.log(info);
        });
    });
})
let visBlocks = ref([{ id: 'box1', top: '50px', left: '50px' }]);
let boxNum = 1;

function addNode() {
  console.log("新增");
  boxNum++;
  //给第boxnum个节点发送一个信号
  visBlocks.value.push({ id: 'box' + boxNum, top: Math.random() * 300 + 'px', left: Math.random() * 300 + 'px' });
      // 初始化jsPlumb
      nextTick(()=>{
        //设置可拖动
        plumbIns.draggable(plumbIns.getSelector("#box" + boxNum));
        // 连接两个div
        plumbIns.connect(
            {
                source: "box"+(boxNum-1),
                target: "box"+boxNum,
            },
            common
        );
      })
}
</script>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
    position: relative;
}

.box {
    // width: max-content;
    // height: auto;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    position: absolute;
    cursor: pointer;
}
</style>