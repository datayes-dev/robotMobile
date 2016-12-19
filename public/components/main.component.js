'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppComponent = undefined;

var _core = require('@angular/core');

var _searchTitleComponent = require('./search.title.component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          主页面的UI组件
                                                                                                                                                          **/


//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
var AppComponent =

//构造函数
exports.AppComponent = function AppComponent() {
	_classCallCheck(this, AppComponent);

	//this.header = "";
	this.section = "";
	this.footer = "";
	this.mTitle = _searchTitleComponent.SearchTitleComponent;
	this.mTitle.setTile();
};

//这个是反向注入的注入数据


AppComponent.annotations = [new _core.Component({
	selector: 'my-app', //组件对应html标签名称  <my-app>Loading...</my-app>
	templateUrl: './templates/search_main.html' //标签中的模板
})];