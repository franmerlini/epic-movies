import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, of, switchMap } from 'rxjs';

import { MoviesApiService } from '@epic-movies/libs/shared/data-access/movies-api';
import { MoviesApiActions, MoviesPageActions } from './movies.actions';

@Injectable()
export class MoviesEffects {
  private readonly actions$ = inject(Actions);
  private readonly moviesService = inject(MoviesApiService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesPageActions.init),
      switchMap(() =>
        this.moviesService.getMovies().pipe(
          switchMap((movies) => of(MoviesApiActions.loadMoviesSuccess(movies))),
          catchError((error) => of(MoviesApiActions.loadMoviesFailure(error)))
        )
      )
    )
  );
}
