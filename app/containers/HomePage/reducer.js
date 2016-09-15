/*
 * Home Reducer
 */

import {
  START_GAME,
  END_GAME,
  SET_GRID,
  INCREMENT_SCORE,
} from './constants';

import { List, fromJS } from 'immutable';

const initialState = fromJS({
  width: 4, // This will be setable in the future
  height: 4, // This will be setable in the future
  rounds: 2, // This will be setable in the future
  duration: 1000, // This will be setable in the future
  isStarted: false,
  isFinished: false,
  grid: false,
  score: 0,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return state
        .set('score', 0)
        .set('isStarted', true)
        .set('isFinished', false);
    case END_GAME:
      return state
        .set('grid', false)
        .set('isStarted', false)
        .set('isFinished', true);
    case SET_GRID:
      return state
        .set('grid', new List(action.grid));
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;
