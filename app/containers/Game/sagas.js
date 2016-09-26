/**
*
* Game Sagas
*
*/

import { fork, call, put, take, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import getHoles from 'utils/getHoles';

import {
  START_GAME,
  END_GAME,
} from './constants';

import {
  endGame,
  setHoles,
} from './actions';

import {
  selectRounds,
  selectDuration,
  selectWidth,
  selectHeight,
  selectHamsterCount,
} from './selectors';

/**
 * Emits a set number of rounds on an interval.
*/
export function* roundCounter(rounds, duration) {
  let count = rounds;
  return eventChannel(emitter => {
    const interval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        emitter(count);
      } else {
        emitter(END);
        clearInterval(interval);
      }
    }, duration);
    return () => {
      clearInterval(interval);
    };
  });
}

/**
 * Controls the game flow.
*/
export function* startRounds() {
  const rounds = yield select(selectRounds());
  const duration = yield select(selectDuration());
  const width = yield select(selectWidth());
  const height = yield select(selectHeight());
  const hamsterCount = yield select(selectHamsterCount());
  const length = width * height;
  // Subscribe to the emitter
  const chan = yield call(roundCounter, rounds, duration);
  try {
    while (true) { // eslint-disable-line no-constant-condition
      const holes = yield call(getHoles, length, hamsterCount);
      yield put(setHoles(holes));
      // Wait for emitter before looping again
      yield take(chan);
    }
  } finally {
    yield put(endGame());
  }
}

/**
 * Starts the game and waits for game to end to look for next start.
*/
export function* startGameResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(START_GAME);
    yield fork(startRounds);
    yield take(END_GAME);
  }
}

export default [
  startGameResponder,
];
