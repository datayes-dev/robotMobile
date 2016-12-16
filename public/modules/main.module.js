'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

var _mainComponent = require('../components/main.component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           主页面模块
                                                                                                                                                          **/


//AppComponent 这个是UI组件，可以直接进行操作

//主页面模块，的逻辑封装类
var AppModule =

//构造方法
exports.AppModule = function AppModule() {
  _classCallCheck(this, AppModule);
};

//这个是反向注入的注入数据


AppModule.annotations = [new _core.NgModule({
  imports: [_platformBrowser.BrowserModule],
  declarations: [_mainComponent.AppComponent], //声明
  bootstrap: [_mainComponent.AppComponent] //这里是指定加载哪一个组件
})];