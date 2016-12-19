/**
主页面的UI组件
**/
import { Component } from '@angular/core';
import { SearchTitleComponent } from './search.title.component.js';

//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
export class AppComponent {

	//构造函数
	constructor() {
		
		//this.header = "";
		this.section = "";
		this.footer = "";
		this.mTitle = SearchTitleComponent;
		this.mTitle.setTile();
	}
}

//这个是反向注入的注入数据
AppComponent.annotations = [
  new Component({
    selector: 'my-app',//组件对应html标签名称  <my-app>Loading...</my-app>
    templateUrl: './templates/search_main.html'//标签中的模板
  })
];