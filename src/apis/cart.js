// 封装购物车相关接口
import request from '@/utils/http';

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
    return request({
        url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart'
    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return request({
        url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCartAPI = (data) => {
    return request({
        url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart/merge',
        method: 'POST',
        data
    })
}