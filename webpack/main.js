//es6 Moudule语法
//整个项目的入口文件
//从这个路径里面导入app对象,名字可以任意取   路径：相对路径
import App from "./App";
import Vue from "../js/vue/vue.js";

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
});