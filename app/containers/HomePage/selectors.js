/**
 * Home Selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectIsStarted = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('isStarted')
);

const selectScore = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('score')
);

const selectGrid = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('grid')
);

export {
  selectIsStarted,
  selectHome,
  selectScore,
  selectGrid,
};
