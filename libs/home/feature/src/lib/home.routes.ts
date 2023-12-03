import { Route } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { MoviesEffects, MoviesFeature } from '@epic-movies/libs/home/data-access';
import { MoviesApiService } from '@epic-movies/libs/shared/data-access/movies-api';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    providers: [provideState(MoviesFeature), provideEffects(MoviesEffects), MoviesApiService],
  },
];
