/**
 主页面模块
**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/main.component.js';//AppComponent 这个是UI组件，可以直接进行操作
import { SearchTitleComponent } from '../components/search.title.component.js';

//主页面模块，的逻辑封装类
export class AppModule {

   //构造方法
   constructor() {


   }
}

//这个是反向注入的注入数据
AppModule.annotations = [
	new NgModule({
		imports: [ BrowserModule ],
      	declarations: [ AppComponent, SearchTitleComponent],//声明
      	bootstrap: [ AppComponent ]//这里是指定加载哪一个组件
	})
];

