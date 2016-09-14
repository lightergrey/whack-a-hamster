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

const selectRounds = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('rounds')
);

const selectDuration = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('duration')
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
  selectRounds,
  selectDuration,
  selectScore,
};
