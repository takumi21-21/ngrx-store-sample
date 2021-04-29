import { createReducer, on } from '@ngrx/store';
import * as CounterAction from './count.action'

export const featureName = 'count';

export interface CountState {
  count: number;
}

export const initialState: CountState = {
  count: 0,
}

const _counterReducer = createReducer(
  initialState,
  on(CounterAction.increment, (state) => ({ ...state, count: state.count + 1})),
  on(CounterAction.decrement, (state) => ({ ...state, count: state.count -1 })),
  on(CounterAction.reset, (state) => ({ ...state, count: 0 }))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
