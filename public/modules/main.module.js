'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

var _mainComponent = require('../components/main.component.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** JavaScript 
                                                                                                                                                          (function(app) {
                                                                                                                                                          
                                                                                                                                                            app.AppModule =
                                                                                                                                                              ng.core.NgModule({
                                                                                                                                                                imports: [ ng.platformBrowser.BrowserModule ],
                                                                                                                                                                declarations: [ app.AppComponent ],
                                                                                                                                                                bootstrap: [ app.AppComponent ]
                                                                                                                                                              })
                                                                                                                                                              .Class({
                                                                                                                                                                constructor: function() {}
                                                                                                                                                              });
                                                                                                                                                          
                                                                                                                                                          })(window.app || (window.app = {}));
                                                                                                                                                          **/


var AppModule = exports.AppModule = function AppModule() {
  _classCallCheck(this, AppModule);
};

AppModule.annotations = [new _core.NgModule({
  imports: [_platformBrowser.BrowserModule],
  declarations: [_mainComponent.AppComponent],
  bootstrap: [_mainComponent.AppComponent]
})];