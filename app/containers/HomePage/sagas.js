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
  selectMoleCount,
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
  const moleCount = yield select(selectMoleCount());
  const length = width * height;
  const chan = yield call(roundCounter, rounds, duration);
  try {
    while (true) { // eslint-disable-line no-constant-condition
      const holes = yield call(getHoles, length, moleCount);
      yield put(setHoles(holes));
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
