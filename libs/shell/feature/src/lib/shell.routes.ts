import { Route } from '@angular/router';

import { LayoutComponent } from '@epic-movies/libs/shell/ui/layout';

export const ShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'browse',
        loadChildren: () => import('@epic-movies/libs/home/feature').then((m) => m.HomeRoutes),
      },
      {
        path: 'movies',
        loadChildren: () => import('@epic-movies/libs/movie/feature/shell').then((m) => m.MoviesRoutes),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'browse',
  },
];
