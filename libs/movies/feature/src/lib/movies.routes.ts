import { Route } from '@angular/router';

import { MovieDetailComponent } from '@epic-movies/libs/movies/ui/movie-detail';
import { MoviesComponent } from './movies.component';

export const MoviesRoutes: Route[] = [
  {
    path: '',
    component: MoviesComponent,
    providers: [],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    providers: [],
  },
];
