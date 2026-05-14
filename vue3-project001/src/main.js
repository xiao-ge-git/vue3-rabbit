// 导入样式组件
import './assets/main.css'

// new Vue() 创建一个应用实例对象
import { createApp } from 'vue'

// // 导入根组件
// import App from './App.vue'
// // 1.以根组件App作为参数生成一个应用实例
// // 2.挂载到id为app的节点上 在index.html中
// createApp(App).mount('#app')

// 导入根组件
import roompage from './components/provide/room-page.vue'
// 1.以根组件App作为参数生成一个应用实例
// 2.挂载到id为app的节点上 在index.html中
createApp(roompage).mount('#app')

