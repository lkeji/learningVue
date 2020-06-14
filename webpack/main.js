//es6 Moudule语法
//整个项目的入口文件
//从这个路径里面导入app对象,名字可以任意取   路径：相对路径
// import App from "./App";
import Vue from "../js/vue/vue.js";
//拿到抛出的key
// import {num1,num2,add} from "./App";
//
// console.log(num1);
// console.log(num2);
// console.log(add(3,5));

//整个App.js模块加载
import * as obj from './App';
console.log(obj.num1);

new Vue({
    el:'#app',
    components:{
       App:obj.default
    },
    template:'<App/>'
});