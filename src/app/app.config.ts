import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { getAppConfigProvider } from '@epic-movies/libs/shared/app-config';
import { ShellRoutes } from '@epic-movies/libs/shell/feature';

import { environment } from '../environments/environment';
import { ROOT_EFFECTS, ROOT_REDUCERS } from './store';
import * as fromRouter from './store/reducers/router.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ShellRoutes),
    provideStore(ROOT_REDUCERS),
    provideEffects(ROOT_EFFECTS),
    provideRouterStore({
      stateKey: fromRouter.routerFeatureKey,
      serializer: fromRouter.CustomSerializer,
    }),
    provideStoreDevtools(),
    provideHttpClient(),
    getAppConfigProvider(environment),
  ],
};
