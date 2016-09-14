/*
 * Home Reducer
 */

import {
  START_GAME,
  INCREMENT_SCORE,
} from './constants';

import { List, fromJS } from 'immutable';

function generateHoles(width, height) {
  return new List(Array(width * height).fill(true));
}

const initialState = fromJS({
  width: 4, // This will be setable in the future
  height: 4, // This will be setable in the future
  isStarted: false,
  holes: false,
  score: 0,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return state
        .set('isStarted', true)
        .set('holes', generateHoles(state.get('width'), state.get('height')));
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;