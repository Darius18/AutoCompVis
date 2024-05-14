import './assets/main.css'
// import jsPlumb from "@jsplumb/browser-ui";
// import * as jsPlumb from "@jsplumb/browser-ui";
//这种方式会将@jsplumb/browser-ui模块的所有导出都导入到jsPlumb对象中

import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import JsonViewer from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(JsonViewer);
app.mount('#app')
