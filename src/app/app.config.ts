import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { getAppConfigProvider } from '@epic-movies/libs/shared/app-config';
import { ShellRoutes } from '@epic-movies/libs/shell/feature';

import { CustomSerializer, ROOT_EFFECTS, ROOT_REDUCERS, RouterFeatureKey } from '@epic-movies/libs/shared/store';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ShellRoutes),
    provideStore(ROOT_REDUCERS),
    provideEffects(ROOT_EFFECTS),
    provideRouterStore({
      stateKey: RouterFeatureKey,
      serializer: CustomSerializer,
    }),
    provideStoreDevtools(),
    provideHttpClient(),
    getAppConfigProvider(environment),
  ],
};
