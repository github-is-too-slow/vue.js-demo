//CommonJs导入
let {age, height} = require("./js/info");
//ES6导入
import {name} from "./js/info";
import {sum, sub} from "./js/mathUtils";
console.log("age" + age);
console.log("name" + name);
console.log("height" + height);
console.log("sum" + sum(1, 2));
console.log("sub" + sub(1, 2));

// 依赖css文件
require("./css/normal")
//依赖less文件
require("./css/special")
document.writeln("<h2>你好啊</h2>")
//安装后导入Vue
import Vue from "vue"
import App from "./vue/App"
new Vue({
    el: '#app',
    template: `<App></App>`,
    components: {
        App
    }
})