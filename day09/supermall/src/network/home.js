import {request} from 'network/request'

export function getHomeMultidate(){
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page){
    return request({
        url: '/home/goods',
        query: {
            type,
            page
        }
    })
}