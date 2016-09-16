/**
 * Home Selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectIsStarted = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('isStarted')
);

const selectIsFinished = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('isFinished')
);

const selectHoles = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('holes')
);

const selectWidth = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('width')
);

const selectHeight = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('height')
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

const selectMoleCount = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('moleCount')
);

export {
  selectHome,
  selectIsStarted,
  selectIsFinished,
  selectHoles,
  selectWidth,
  selectHeight,
  selectRounds,
  selectDuration,
  selectScore,
  selectMoleCount,
};
