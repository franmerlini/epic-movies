import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import { MoviesApiActions, MoviesPageActions } from './movies.actions';
import { MoviesEntity } from './movies.models';

interface MoviesState extends EntityState<MoviesEntity> {
  selectedId: number | null;
  loaded: boolean;
  error: string | null;
}

const moviesAdapter: EntityAdapter<MoviesEntity> =
  createEntityAdapter<MoviesEntity>();

const initialState: MoviesState = moviesAdapter.getInitialState({
  selectedId: null,
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialState,
  on(MoviesPageActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MoviesApiActions.loadMoviesSuccess, (state, { movies }) =>
    moviesAdapter.setAll(movies, { ...state, loaded: true })
  ),
  on(MoviesApiActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const moviesFeature = createFeature({
  name: 'moviesFeature',
  reducer,
});
