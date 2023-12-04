import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, catchError, filter, of, switchMap, take, tap } from 'rxjs';

import { MoviesFeature, MoviesPageActions } from '@epic-movies/libs/home/data-access';

export const moviesGuard = (): CanActivateFn => () => {
  const store = inject(Store);

  return checkStore(store).pipe(
    switchMap(() => of(true)),
    catchError(() => of(false))
  );
};

const checkStore = (store: Store): Observable<boolean> => {
  return store.select(MoviesFeature.selectLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(MoviesPageActions.init());
      }
    }),
    filter((loaded) => loaded),
    take(1)
  );
};
