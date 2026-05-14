// 封装分类数据业务相关代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
    // 获取数据
    const categoryData = ref({})
    const route = useRoute()
    // console.log(route);
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    // 思路2 目标:路由参数变化时 可以把分类数据接口重新发送 即重新调用getCategory
    onBeforeRouteUpdate((to) => {
        console.log("路由变化了");
        // 存在问题：getCategory使用最新的路由参数请求最新的分类
        console.log(to);
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}
