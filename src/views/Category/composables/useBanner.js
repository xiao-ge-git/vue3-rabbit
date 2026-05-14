// 封装banner轮播图相关的业务代码
import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home";

export function useBanner(){
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        // console.log(res);
        bannerList.value = res.result
    }
    onMounted(() => getBanner())

    // 把外界要用到的数据用对象的形式返回出去
    return {
        bannerList
    }
}