import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs';

import { RouterActions } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.go),
        tap(({ path, query: queryParams, extras }) =>
          this.router.navigate(path, { queryParams, ...extras })
        )
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}
