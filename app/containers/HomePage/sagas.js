import { fork, call, put, take, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import {
  START_GAME,
  END_GAME,
} from './constants';

import {
  endGame,
  generateHoles,
} from './actions';

import {
  selectRounds,
  selectDuration,
} from './selectors';

export function* roundCounter(rounds, duration) {
  let count = rounds;
  return eventChannel(emitter => {
    const interval = setInterval(() => {
      if (count > 0) {
        emitter(count);
      } else {
        emitter(END);
        clearInterval(interval);
      }
      count -= 1;
    }, duration);
    return () => {
      clearInterval(interval);
    };
  });
}

export function* startRounds() {
  const rounds = yield select(selectRounds());
  const duration = yield select(selectDuration());
  const chan = yield call(roundCounter, rounds, duration);
  try {
    while (true) { // eslint-disable-line no-constant-condition
      const round = yield take(chan);
      console.log(`roundCounter: ${round}`); // eslint-disable-line no-console
      yield put(generateHoles());
    }
  } finally {
    console.log('countdown terminated'); // eslint-disable-line no-console
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
