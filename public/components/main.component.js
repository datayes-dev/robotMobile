'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          主页面的UI组件
                                                                                                                                                          **/


//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
var AppComponent =

//构造函数
exports.AppComponent = function AppComponent() {
  _classCallCheck(this, AppComponent);
};

//这个是反向注入的注入数据


AppComponent.annotations = [new _core.Component({
  selector: 'my-app', //组件对应html标签名称  <my-app>Loading...</my-app>
  template: '<h1>我的第一个 Angular 应用</h1>' //标签中的模板
})];