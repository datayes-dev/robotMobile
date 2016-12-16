import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../modules/main.module.js';

const platform = platformBrowserDynamic();

//启动WebAPP
platform.bootstrapModule(AppModule);