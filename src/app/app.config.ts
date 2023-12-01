import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { getAppConfigProvider } from '@epic-movies/libs/shared/app-config';
import { ShellRoutes } from '@epic-movies/shell/feature';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ShellRoutes),
    provideStoreDevtools(),
    provideEffects(),
    provideStore(),
    provideHttpClient(),
    getAppConfigProvider(environment),
  ],
};
