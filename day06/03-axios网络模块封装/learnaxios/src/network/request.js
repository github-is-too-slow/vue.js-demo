import axiox from 'axios'
export function request(config){
    const instance = axiox.create({
        baseURL: 'http://localhost:9999/hello',
        timeout: 5000
    })

    // 对请求进行拦截
    // instance.interceptors.request.use(config => {
    //     console.log(config)
    //     return config
    // }, err => {
    //     console.log(err)
    // })

    // 对响应进行拦截
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })
    // 进行网络请求，并且返回的是Promise对象
    return instance(config)
}