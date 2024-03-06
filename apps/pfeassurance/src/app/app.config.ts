import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './intercepters/token.interceptor';
import { errorInterceptor } from './intercepters/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideStore(), provideHttpClient(withInterceptors([
    tokenInterceptor ,
    errorInterceptor
  ]))],
};
