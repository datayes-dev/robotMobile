'use strict';

var _shim = require('../node_modules/core-js/client/shim.min');

var _shim2 = _interopRequireDefault(_shim);

var _zone = require('../node_modules/zone.js/dist/zone');

var _zone2 = _interopRequireDefault(_zone);

var _Reflect = require('../node_modules/reflect-metadata/Reflect');

var _Reflect2 = _interopRequireDefault(_Reflect);

var _system = require('../node_modules/systemjs/dist/system.src');

var _system2 = _interopRequireDefault(_system);

var _systemjs = require('../systemjs.config');

var _systemjs2 = _interopRequireDefault(_systemjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//启动之前加载CSS


//启动angular2
System.import('app').catch(function (err) {
  console.error(err);
});

// config 
//app 入口文件

// Polyfill(s) for older browsers