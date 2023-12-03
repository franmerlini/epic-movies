import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import { selectCurrentRoute } from '@epic-movies/libs/shared/store';
import { MoviesApiActions, MoviesPageActions } from './movies.actions';
import { MoviesEntity } from './movies.models';

interface MoviesState extends EntityState<MoviesEntity> {
  loaded: boolean;
  error: string | null;
}

const moviesAdapter: EntityAdapter<MoviesEntity> = createEntityAdapter<MoviesEntity>();

const initialState: MoviesState = moviesAdapter.getInitialState({
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialState,
  on(MoviesPageActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(MoviesApiActions.loadMoviesSuccess, (state, { movies }) => moviesAdapter.setAll(movies, { ...state, loaded: true })),
  on(MoviesApiActions.loadMoviesFailure, (state, { error }) => ({ ...state, error })),
  on(MoviesApiActions.loadMoviesOnWatchlistSuccess, (state, { movies }) =>
    moviesAdapter.upsertMany(
      movies.map((movie) => ({ ...movie, isOnWatchlist: true })),
      state
    )
  ),
  on(MoviesApiActions.loadMoviesOnWatchlistFailure, (state, { error }) => ({ ...state, error })),
  on(MoviesPageActions.addToWatchlist, (state, { movie }) => moviesAdapter.upsertOne({ ...movie, isOnWatchlist: true }, state)),
  on(MoviesApiActions.addToWatchlistFailure, (state, { error }) => ({ ...state, error })),
  on(MoviesPageActions.removeFromWatchlist, (state, { movieId }) =>
    moviesAdapter.updateOne({ id: movieId, changes: { isOnWatchlist: false } }, state)
  ),
  on(MoviesApiActions.removeFromWatchlistFailure, (state, { error }) => ({ ...state, error }))
);

export const MoviesFeature = createFeature({
  name: 'moviesFeature',
  reducer,
  extraSelectors: ({ selectMoviesFeatureState, selectEntities }) => ({
    ...moviesAdapter.getSelectors(selectMoviesFeatureState),
    selectSelectedMovie: createSelector(selectEntities, selectCurrentRoute, (entities, { params }) => entities[params['id']]),
  }),
});
