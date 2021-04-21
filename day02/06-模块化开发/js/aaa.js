;
let flag = true;
// 导出方式1
export {flag}

// 导出方式2
// 导出变量
export let name = "Jack"
export let age = 18;
//导出函数
export function sum(a, b){
    return a + b;
}
// 导出类
export class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    run(){
        console.log("在奔跑")
    }
}

//导出方式3：默认导出
export default function(){
    console.log("我是默认导出函数")
}
