import './assets/main.css'
// import jsPlumb from "@jsplumb/browser-ui";
// import * as jsPlumb from "@jsplumb/browser-ui";
//这种方式会将@jsplumb/browser-ui模块的所有导出都导入到jsPlumb对象中

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
