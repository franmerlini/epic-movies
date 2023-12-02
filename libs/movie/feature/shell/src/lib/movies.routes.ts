import { Route } from '@angular/router';

import { MovieDetailComponent } from '@epic-movies/libs/movie/ui/movie-detail';
import { ExistsMovieGuard } from '@epic-movies/libs/movie/utils';

export const MoviesRoutes: Route[] = [
  {
    path: '',
    providers: [],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    canActivate: [ExistsMovieGuard],
  },
];
