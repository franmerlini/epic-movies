import { Route } from '@angular/router';

import { LayoutComponent } from '@epic-movies/shell/ui/layout';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@epic-movies/home/feature').then((m) => m.HomeModule),
      },
    ],
  },
];
