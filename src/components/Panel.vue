<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="400px">
                    <ChartList></ChartList>
                </el-aside>
                <el-container>
                    <el-main>
                        <!-- <vueDragDemo></vueDragDemo> -->
                        <Board></Board>
                        <!-- <VisBlock></VisBlock> -->
                        <!-- <ExportData :data="data"></ExportData> -->
                    </el-main>
                    <el-footer height="200px">
                        <div class="com">
                            <el-row :gutter="20">
                                <el-col :span="9">
                                    <div class="grid-content jux-bg">
                                        <div class="bigTitle" id="Juxtaposition">Juxtaposition</div>
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="jux chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/jux1.png" alt="" class="composition_img">
                                                    <span class="title_composition">repetition</span>
                                                </div>
                                            </el-col>
                                            <el-col :span="8">
                                                <div class="jux chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/jux2.png" alt="" class="composition_img">
                                                    <span class="title_composition">mirror</span>
                                                </div>
                                            </el-col>
                                            <el-col :span="8">
                                                <div class="jux chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/jux3.png" alt="" class="composition_img">
                                                    <span class="title_composition">stack</span>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content over-bg">
                                        <div class="bigTitle" id="Overlay">Overlay</div>
                                        <el-row>
                                            <el-col :span="6">
                                                <div class="over chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/over1.png" alt="" class="composition_img">
                                                    <span class="title_composition">co-axis</span>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="over chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/over2.png" alt="" class="composition_img">
                                                    <span class="title_composition">coordinate</span>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="over chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/over3.png" alt="" class="composition_img">
                                                    <span class="title_composition">annotation</span>
                                                </div>
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="over chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/over4.png" alt="" class="composition_img">
                                                    <span class="title_composition">large panel</span>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content nest-bg">
                                        <div class="bigTitle" id="Nesting">Nesting</div>
                                        <el-row>
                                            <el-col :span="24">
                                                <div class="over chartBlock" draggable="true"
                                                    @dragstart="dragStartHandler">
                                                    <img src="../assets/compPatterns/nest.png" alt="" class="composition_img">
                                                    <span class="title_composition">nesting</span>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script setup>
// import vueDragDemo from './vueDragDemo.vue';
import Board from './Board.vue';
// import VisBlock from './VisBlock.vue';
import Header from './Header.vue';
import ChartList from './ChartList.vue';
import DataPanel from './DataPanel.vue';

import { onMounted } from 'vue';
onMounted(() => {
    const imgs = document.querySelectorAll('img')
    imgs.forEach(img => {
        img.setAttribute('draggable', 'false')
    })
    const chartBlock = document.querySelectorAll('.chart-block')
    chartBlock.forEach(block => {
        block.setAttribute('draggable', 'true')
    })
});

    //footer中的逻辑
    const dragStartHandler = (e) => {
        //   console.log(e)
        e.dataTransfer.setData('html_composition', e.target.innerHTML)
    }
</script>

<style lang="scss" scoped>
.test {
    width: 100px;
    height: 100px;
    background-color: aqua;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.bigTitle {
    font-size: 24px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: 1000;
    font-family: Arial, Helvetica, sans-serif;
}

.grid-content {
    border-radius: 20px;
    min-height: 36px;
    height: 200px;
    overflow: hidden;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    //   box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
}

#Juxtaposition {
    background-color: #3977af;
}

#Overlay {
    background-color: #ef8536;
}

#Nesting {
    background-color: #519c3e;
}

.title_composition {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
}

.chartBlock {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
}

.jux-bg {
    background-color: #cbddea;
}

.over-bg {
    background-color: #fae0c6;
}

.nest-bg {
    background-color: #d0e6cc;
}
</style>