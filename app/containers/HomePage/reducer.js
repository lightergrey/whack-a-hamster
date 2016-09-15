/*
 * Home Reducer
 */

import {
  START_GAME,
  END_GAME,
  GENERATE_HOLES,
  INCREMENT_SCORE,
} from './constants';

import { List, fromJS } from 'immutable';
import luckio from 'luckio';

function generateHoles(width, height) {
  const isLucky = luckio(20);
  return new List(Array(width * height).fill().map(() => isLucky()));
}

const initialState = fromJS({
  width: 4, // This will be setable in the future
  height: 4, // This will be setable in the future
  isStarted: false,
  holes: false,
  rounds: 3, // This will be setable in the future
  duration: 1000, // This will be setable in the future
  score: 0,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return state
        .set('score', 0)
        .set('isStarted', true);
    case END_GAME:
      return state
        .set('holes', false)
        .set('isStarted', false);
    case GENERATE_HOLES:
      return state
        .set('holes', generateHoles(state.get('width'), state.get('height')));
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;
