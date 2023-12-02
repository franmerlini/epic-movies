import { Route } from '@angular/router';
import { MoviesComponent } from './movies.component';

export const MoviesRoutes: Route[] = [
  {
    path: '',
    component: MoviesComponent,
    providers: [],
  },
];
