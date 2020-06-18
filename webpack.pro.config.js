//webpack的写法：webpack 你的项目入口文件 你要输出的文件
//webpack的写法：./webpackconfig/main.js ./webpackconfig/build.js

module.exports={
    //入口
    entry: {
        //里面可以有多个入口，也可以只有一个，如果只有一个就默认从这一个入口进行分析
        "main":"./webpackconfig/main.js"
    },
    //出口
    output: {
        filename: "./webpackconfig/build.js"
    }
}
