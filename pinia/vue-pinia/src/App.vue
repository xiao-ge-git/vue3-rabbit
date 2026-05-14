<script setup>
// 导入use打头的方法
import { useCounterStore } from "@/stores/counter";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
// 执行方法得到实例对象
const counterStore = useCounterStore()
console.log(counterStore);

// 属性解构赋值(并保持响应式（实时更新）) storeToRefs仅对ref属性有效，方法不能用这种方法
const {count, doubleCount} = storeToRefs(counterStore)
console.log(count,doubleCount);
// 方法解构赋值
const {increment} = counterStore

onMounted(()=>{
    counterStore.getList()
})
</script>
<template>
    <button @click="increment">{{ count }}</button>
    {{ doubleCount }}

    <ul>
        <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
