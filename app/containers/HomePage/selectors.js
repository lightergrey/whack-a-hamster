/**
 * Home Selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectScore = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('score')
);

export {
  selectHome,
  selectScore,
};
