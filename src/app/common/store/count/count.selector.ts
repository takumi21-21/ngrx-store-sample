import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountState, featureName } from './count.reducer';

export const selectCounterState = createFeatureSelector<CountState>(featureName);
export const selectCount = createSelector(selectCounterState, state => state.count);
