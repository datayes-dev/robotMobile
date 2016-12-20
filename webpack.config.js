//一个常见的Webpack配置文件
var webpack = require('webpack');

module.exports = {
  entry: {

    //已多次提及的唯一入口文件

    page1: [
      __dirname + "/public/start.js", 
    ]

  }, 
  output: {
    path: __dirname,//打包后的文件存放的地方
    filename: "/public/index.js"//打包后输出文件的文件名
  },
  module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            //.react jsx
            { 
              test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    }
}