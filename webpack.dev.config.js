//webpack的写法：webpack 你的项目入口文件 你要输出的文件
//webpack的写法：./webpackconfig/main.js ./webpackconfig/build.js

module.exports={
    //入口
    entry: {
        //里面可以有多个入口，也可以只有一个，如果只有一个就默认从这一个入口进行分析
        "main":"./cssloader/main.js"
    },
    //出口
    output: {
        filename: "./cssloader/build.js"
    },
    //监视html改动，自动产出build.js
    watch: true,
    //声明模块
    //包含各个loader
    module: {
        loaders: [
            {
                /*
                * 遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件
                * 最后计算完的css，将会使用style-loader生成一个内容为最终解释完的css代码的style标签，放到head标签里
                * webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader
                * */
                test:/\.css$/,//对后缀为css的文件进行处理
                //执行顺序：先右后左
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
