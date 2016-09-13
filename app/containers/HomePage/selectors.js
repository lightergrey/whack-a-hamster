/**
 * Home Selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectScore = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('score')
);

const selectGrid = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('grid')
);

export {
  selectHome,
  selectScore,
  selectGrid,
};
