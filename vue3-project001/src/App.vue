<script setup>
import { onMounted, ref } from 'vue';
import TestCom  from "./test-com.vue";
// 获取dom元素h1标签 1 调用ref函数生成ref对象（容器）
const h1Ref = ref(null)
// 获取组件实例对象
const comRef = ref(null)
// 组件挂载完毕之后才能获取 onMounted()参数是一个回调函数
onMounted(()=> {
    console.log(h1Ref.value);
    console.log(comRef.value);
})
</script>
<template>
    <!-- 通过ref标识绑定ref对象 -->
    <h1 ref="h1Ref">我是dom标签h1 存在h1Ref.value中</h1>
    <TestCom ref="comRef"/>
</template>

