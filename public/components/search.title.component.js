"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SearchTitleComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require("@angular/core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
var SearchTitleComponent = exports.SearchTitleComponent = function () {

	//构造函数
	function SearchTitleComponent() {
		_classCallCheck(this, SearchTitleComponent);

		//this.header = "";
		//this.section = "";
		//this.footer = ""
		this.title = "";
	}

	_createClass(SearchTitleComponent, [{
		key: "setTile",
		value: function setTile() {
			this.title = "aaaa";
		}
	}]);

	return SearchTitleComponent;
}();

//这个是反向注入的注入数据


SearchTitleComponent.annotations = [new _core.Component({
	selector: 'my-search-header',
	templateUrl: './templates/search.title.html' //标签中的模板
})];