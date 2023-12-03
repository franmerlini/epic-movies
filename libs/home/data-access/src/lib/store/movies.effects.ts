import { inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { MoviesApiService } from '@epic-movies/libs/shared/data-access/movies-api';
import { MoviesApiActions, MoviesPageActions } from './movies.actions';

const init$ = createEffect(
  (actions$ = inject(Actions), moviesService = inject(MoviesApiService)) =>
    actions$.pipe(
      ofType(MoviesPageActions.init),
      switchMap(() =>
        moviesService.getMovies().pipe(
          switchMap((movies) => of(MoviesApiActions.loadMoviesSuccess(movies))),
          catchError((error) => of(MoviesApiActions.loadMoviesFailure(error)))
        )
      )
    ),
  { functional: true }
);

const moviesOnWatchlist$ = createEffect(
  (actions$ = inject(Actions), moviesService = inject(MoviesApiService)) =>
    actions$.pipe(
      ofType(MoviesApiActions.loadMoviesSuccess),
      switchMap(() =>
        moviesService.getMoviesOnWatchlist().pipe(
          map((movies) => MoviesApiActions.loadMoviesOnWatchlistSuccess(movies)),
          catchError((error) => of(MoviesApiActions.loadMoviesOnWatchlistFailure(error)))
        )
      )
    ),
  { functional: true }
);

const addToWatchlist$ = createEffect(
  (actions$ = inject(Actions), moviesService = inject(MoviesApiService)) =>
    actions$.pipe(
      ofType(MoviesPageActions.addToWatchlist),
      switchMap(({ movie }) =>
        moviesService.addToWatchlist(movie).pipe(
          map(() => MoviesApiActions.addToWatchlistSuccess()),
          catchError((error) => of(MoviesApiActions.addToWatchlistFailure(error)))
        )
      )
    ),
  { functional: true }
);

export const MoviesEffects = { init$, moviesOnWatchlist$, addToWatchlist$ };
