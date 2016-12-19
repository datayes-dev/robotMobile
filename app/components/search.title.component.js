import { Component } from '@angular/core';

//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
export class SearchTitleComponent {

	//构造函数
	constructor() {
		
		//this.header = "";
		//this.section = "";
		//this.footer = ""
		this.title = "";
	}

	setTile() {
		this.title = "aaaa";
	}
}

//这个是反向注入的注入数据
SearchTitleComponent.annotations = [
  new Component({
    selector: 'my-search-header',
    templateUrl: './templates/search.title.html'//标签中的模板
  })
];