'use strict';

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _mainModule = require('../public/modules/main.module.js');

var platform = (0, _platformBrowserDynamic.platformBrowserDynamic)();

//启动WebAPP
platform.bootstrapModule(_mainModule.AppModule);