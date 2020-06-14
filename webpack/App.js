
var app={
    template:'<div>我是一个入口组件</div>'
};
//抛出这个对象，这样别人就可以import拿了
export default app;
//声明一整个对象key导出
export var num1=2;
//声明再导出
var num2=3;
export {num2}

export function add(x,y) {
    return console.log(x+y);
}