<template>
    <div id="container">
        <VisBlock :message="message[0]" class="box" id="box1">Box 1</VisBlock>
        <VisBlock :message="message[1]" class="box" id="box2" style="top: 200px; left: 400px">Box 2</VisBlock>
        <VisBlock :message="message[2]" class="box" id="box3" style="top: 300px; left: 400px">移动</VisBlock>
    </div>
</template>
<script setup>
import { onMounted,isRef,ref } from 'vue'
import VisBlock from "@/components/VisBlock.vue";
import {jsPlumb} from "jsplumb";
let message=ref([false,false,false])
onMounted(() => {
    let blocks=document.querySelectorAll(".box")
    blocks.forEach(block=>{
        block.addEventListener("dragover",function (e) {
            console.log("现在拖动的是"+e.currentTarget.id)
            let x = Number((e.currentTarget.id)[3])-1;
            //然后给第x个子组件发送信息：activate:true
            message.value=[false,false,false]
            message.value[x]=true;
            console.log(message.value);
        })
    })

    let plumbIns = jsPlumb.getInstance()
    // 初始化jsPlumb
    plumbIns.ready(function () {
        console.log("ready！");
        //设置连接的默认值
        let common = {
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
        plumbIns.connect(
            {
                source: "box1",
                target: "box2",
            },
            common
        );

        // 设置连接容器
        plumbIns.setContainer("container");

        // 设置可拖动
        plumbIns.draggable(plumbIns.getSelector(".box"));

        plumbIns.addEndpoint(
            "box3",
            {
                anchors: "Left",
            },
            common
        );
        plumbIns.addEndpoint(
            "box2",
            {
                anchors: "Right",
            },
            common
        );

        plumbIns.bind("connection", function (info, originalEvent) {
            console.log(info);
        });
    });
})
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