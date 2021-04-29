import { createAction } from '@ngrx/store';

enum ACTIONS {
  INCREMENT = '[Counter Component] increment',
  DECREMENT = '[Counter Component] decrement',
  RESET = '[Counter Component] resert'
}

export const increment = createAction(ACTIONS.INCREMENT);
export const decrement = createAction(ACTIONS.DECREMENT);
export const reset = createAction(ACTIONS.RESET);
