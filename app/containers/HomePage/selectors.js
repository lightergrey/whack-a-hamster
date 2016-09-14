/**
 * Home Selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectIsStarted = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('isStarted')
);

const selectHoles = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('holes')
);

const selectWidth = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('width')
);

const selectScore = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('score')
);

export {
  selectHome,
  selectIsStarted,
  selectHoles,
  selectWidth,
  selectScore,
};
