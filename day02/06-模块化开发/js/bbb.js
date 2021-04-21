;
// 导入方式1
import {flag, name, age, sum, Person} from "./aaa.js"

console.log(flag)
console.log(name)
console.log(age)
console.log(sum(1, 2))
let person = new Person("张三", 20);
console.log("姓名" + person.name)
console.log("年龄" + person.age)
person.run();

// 导入方式2：默认导入
import myFun from "./aaa.js"
myFun()

// 导入方式3：导入到一个对象中
import * as obj from "./aaa.js"
console.log(obj.name)
console.log(obj.sum(1, 2))
let xxx = new obj.Person("李四", 20);
console.log(xxx.name)
console.log(obj)