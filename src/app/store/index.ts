import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '../store/reducers/router.reducers';
import { RouterEffects } from './effects';

export interface State {
  [fromRouter.routerFeatureKey]: fromRouter.State;
}

export const ROOT_REDUCERS: ActionReducerMap<State> = {
  [fromRouter.routerFeatureKey]: fromRouter.reducer,
};

export const ROOT_EFFECTS = [RouterEffects];
