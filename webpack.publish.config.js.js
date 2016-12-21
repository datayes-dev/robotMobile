// webpack 的开发配置文件
// 编写配置文件，要有最基本的文件入口和输出文件配置信息等
// 里面还可以加loader和各种插件配置使用
var path = require('path');
var webpack = require('webpack');
//删除目录插件
var CleanPlugin = require("clean-webpack-plugin");
//提取css插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//自动创建 index.Html 页面插件
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  //入口文件
  entry:[
    path.resolve(__dirname,'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
    filename: "index.js"//打包后输出文件的文件名
  },
  module: {
        //加载器配置
        loaders: [
            //babel-loader: 转换器，编译 JSX 语法和 ES6 语法到 ES5 语法
            { 
              test: /\.jsx?$/, 
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]') // 如果同时使用多个加载器，中间用 ! 连接，加载器的执行顺序是从右向左
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=10000&name=build/[name].[ext]'
            },
            // 处理字体
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    resolve: {
        //查找module的话从这里开始查找
        // root: '/pomy/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        //注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
        extensions: ['', '.js', '.jsx', '.css']     
    },
    plugins: [
        new CleanPlugin(['dist']),
        //压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("main.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["main.css"],
                    "js": ["index.js"]
                }
            },
            // 压缩 html 文档
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.DefinePlugin({
            //去掉react中的警告，react会自己判断
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}