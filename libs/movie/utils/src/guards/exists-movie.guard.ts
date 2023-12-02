import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

import { Observable, catchError, filter, map, of, switchMap, take, tap } from 'rxjs';

import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';

import { MoviesFeature, MoviesPageActions } from '@epic-movies/libs/home/data-access';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

export const existsMovieGuard = (): CanActivateFn => (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);

  return checkStore(store).pipe(
    switchMap(() => {
      const id = +route.params['id'];
      return hasMovie(id, store);
    }),
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

const hasMovie = (id: number, store: Store): Observable<boolean> => {
  return store.select(MoviesFeature.selectEntities).pipe(
    map((entities: Dictionary<Movie>) => {
      const movie = entities[id];
      return !!movie;
    }),
    take(1)
  );
};
