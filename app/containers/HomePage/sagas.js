import { fork, call, put, take, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import getGrid from 'utils/getGrid';

import {
  START_GAME,
  END_GAME,
} from './constants';

import {
  endGame,
  setGrid,
} from './actions';

import {
  selectRounds,
  selectDuration,
  selectWidth,
  selectHeight,
} from './selectors';

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

export function* startRounds() {
  const rounds = yield select(selectRounds());
  const duration = yield select(selectDuration());
  const width = yield select(selectWidth());
  const height = yield select(selectHeight());
  const chan = yield call(roundCounter, rounds, duration);
  try {
    while (true) { // eslint-disable-line no-constant-condition
      const grid = yield call(getGrid, width, height);
      yield put(setGrid(grid));
      yield take(chan);
    }
  } finally {
    yield put(endGame());
  }
}

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
