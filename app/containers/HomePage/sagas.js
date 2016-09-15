import { call, put, take, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

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

function roundCounter(rounds, duration) {
  let count = rounds;
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      if (count > 0) {
        emitter(count);
      } else {
        // this causes the channel to close
        emitter(END);
        clearInterval(iv);
      }
      count -= 1;
    }, duration);
      // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });
}

export function* startGameResponder() {
  yield take(START_GAME);
  const rounds = yield select(selectRounds());
  const duration = yield select(selectDuration());
  const chan = yield call(roundCounter, rounds, duration);
  try {
    while (true) { // eslint-disable-line no-constant-condition
      // take(END) will cause the saga to terminate by jumping to the finally block
      const round = yield take(chan);
      console.log(`roundCounter: ${round}`); // eslint-disable-line no-console
      yield put(generateHoles());
    }
  } finally {
    console.log('countdown terminated'); // eslint-disable-line no-console
  }
}

export default [
  startGameResponder,
];
