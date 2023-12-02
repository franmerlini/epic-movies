import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRouter from '../reducers/router.reducers';

const selectRouterState = createFeatureSelector<fromRouter.State>(fromRouter.RouterFeatureKey);

export const selectCurrentRoute = createSelector(selectRouterState, (router) => router?.state);
