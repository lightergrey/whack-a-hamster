import { put, take, fork, select } from 'redux-saga/effects';

import {
  START_GAME,
} from './constants';

import {
  generateHoles,
} from './actions';

import {
  selectRounds,
  selectDuration,
} from './selectors';

export function* startRounds(rounds, duration) {
  console.log('rounds: %o', rounds); // eslint-disable-line no-console
  console.log('duration: %o', duration); // eslint-disable-line no-console
  yield put(generateHoles());
}

export function* startGameResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(START_GAME);
    const rounds = yield select(selectRounds());
    const duration = yield select(selectDuration());
    yield fork(startRounds, rounds, duration);
  }
}

export default [
  startGameResponder,
];
