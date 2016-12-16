//一个常见的Webpack配置文件
var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/public/angular.index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname,//打包后的文件存放的地方
    filename: "/public/index.js"//打包后输出文件的文件名
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
  ]
}