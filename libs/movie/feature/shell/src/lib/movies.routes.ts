import { Route } from '@angular/router';
import { MoviesEffects, MoviesFeature } from '@epic-movies/libs/home/data-access';
import { MovieComponent } from '@epic-movies/libs/movie/feature/detail';

import { existsMovieGuard } from '@epic-movies/libs/movie/utils';
import { MoviesApiService } from '@epic-movies/libs/shared/data-access/movies-api';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const MoviesRoutes: Route[] = [
  {
    path: ':id',
    component: MovieComponent,
    canActivate: [existsMovieGuard()],
    providers: [provideState(MoviesFeature), provideEffects(MoviesEffects), MoviesApiService],
  },
];
