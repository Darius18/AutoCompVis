<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="400px" >
                    <ChartList></ChartList>
                </el-aside>
                <el-container>
                    <el-main>
                        <!-- <vueDragDemo></vueDragDemo> -->
                        <Board></Board>
                        <!-- <VisBlock></VisBlock> -->
                        <!-- <ExportData :data="data"></ExportData> -->
                    </el-main>
                    <el-footer>Footer</el-footer>
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
</script>

<style lang="scss" scoped>
.test {
    width: 100px;
    height: 100px;
    background-color: aqua;
}
</style>