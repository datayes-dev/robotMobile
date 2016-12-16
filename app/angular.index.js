//app 入口文件

// Polyfill(s) for older browsers
import shim from '../node_modules/core-js/client/shim.min';
import zone from '../node_modules/zone.js/dist/zone';
import reflect from '../node_modules/reflect-metadata/Reflect';
import systemjs from '../node_modules/systemjs/dist/system.src';

// config 
import config from '../systemjs.config';

//启动之前加载CSS


//启动angular2
System.import('app').catch(function(err){ console.error(err); });
