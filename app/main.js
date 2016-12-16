import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../public/modules/main.module.js';

const platform = platformBrowserDynamic();

//启动WebAPP
platform.bootstrapModule(AppModule);