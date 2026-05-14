// 导入一个方法 defineStore

// const { defineStore } = require("pinia");
import { defineStore } from "pinia";
import { computed,ref } from "vue";
import axios from "axios";
const API_URL = 'http://geek.itheima.net/v1_0/channels'
// useCounterStore一般保持语义化的规范，use＋模块名字
// 细节：useCounterStore本身还是一个可执行的方法，必须在组件中执行这个方法，才能得到真实的实例对象
export const useCounterStore = defineStore('counter', () => {
    // 定义数据state
    const count = ref(0)
    // 定义修改数据的方法action 支持同步和异步
    const increment = () => {
        count.value++
    }
    // getter定义
    const doubleCount = computed(() => count.value * 2)

    // 定义异步action
    const list=ref([])
    const getList = async ()=> {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }
    // 以对象方式return 供组件使用
    return {
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})