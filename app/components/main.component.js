/**
主页面的UI组件
**/
import { Component } from '@angular/core';

//主页面的UI组件，的逻辑封装类，主要为模型层暴露一些接口
export class AppComponent {

	//构造函数
	constructor() {
		
	}
}

//这个是反向注入的注入数据
AppComponent.annotations = [
  new Component({
    selector: 'my-app',//组件对应html标签名称  <my-app>Loading...</my-app>
    template: '<h1>我的第一个 Angular 应用</h1>'//标签中的模板
  })
];