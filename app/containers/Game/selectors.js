/**
 * Game Selectors
 */

import { createSelector } from 'reselect';

const selectGame = () => (state) => state.get('home');

const selectIsStarted = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('isStarted')
);

const selectIsFinished = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('isFinished')
);

const selectHoles = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('holes')
);

const selectWidth = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('width')
);

const selectHeight = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('height')
);

const selectRounds = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('rounds')
);

const selectDuration = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('duration')
);

const selectScore = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('score')
);

const selectHamsterCount = () => createSelector(
  selectGame(),
  (homeState) => homeState.get('hamsterCount')
);

export {
  selectGame,
  selectIsStarted,
  selectIsFinished,
  selectHoles,
  selectWidth,
  selectHeight,
  selectRounds,
  selectDuration,
  selectScore,
  selectHamsterCount,
};
