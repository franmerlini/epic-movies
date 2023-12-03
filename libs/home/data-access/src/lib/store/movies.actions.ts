import { createActionGroup, emptyProps } from '@ngrx/store';

import { Movie } from '@epic-movies/libs/shared/data-access/models';

export const MoviesPageActions = createActionGroup({
  source: 'Movies Page',
  events: {
    Init: emptyProps(),
    AddToWatchlist: (movie: Movie) => ({ movie }),
  },
});

export const MoviesApiActions = createActionGroup({
  source: 'Movies API',
  events: {
    'Load movies success': (movies: Movie[]) => ({ movies }),
    'Load movies failure': (error: string) => ({ error }),
    'Load movies on watchlist success': (movies: Movie[]) => ({ movies }),
    'Load movies on watchlist failure': (error: string) => ({ error }),
    'Add to watchlist success': emptyProps(),
    'Add to watchlist failure': (error: string) => ({ error }),
  },
});
