import httpInstance from '@/utils/http';

export function getCategory(){
    // 返回promise对象
    return httpInstance({
        url: 'home/category/head'
    })
}

