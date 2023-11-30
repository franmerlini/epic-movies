import { createActionGroup, emptyProps } from '@ngrx/store';

import { Movie } from '@epic-movies/libs/shared/data-access/models';

export const MoviesPageActions = createActionGroup({
  source: 'Movies Page',
  events: {
    Init: emptyProps(),
  },
});

export const MoviesApiActions = createActionGroup({
  source: 'Movies API',
  events: {
    'Load movies success': (movies: Movie[]) => ({ movies }),
    'Load movies failure': (error: string) => ({ error }),
  },
});
