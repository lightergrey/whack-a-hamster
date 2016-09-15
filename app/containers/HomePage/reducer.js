/*
 * Home Reducer
 */

import {
  START_GAME,
  END_GAME,
  POPULATE_HOLES,
  INCREMENT_SCORE,
} from './constants';

import { List, fromJS } from 'immutable';

const initialState = fromJS({
  width: 6, // This will be setable in the future
  height: 6, // This will be setable in the future
  rounds: 5, // This will be setable in the future
  duration: 1500, // This will be setable in the future
  isStarted: false,
  isFinished: false,
  holes: false,
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
        .set('holes', false)
        .set('isStarted', false)
        .set('isFinished', true);
    case POPULATE_HOLES:
      return state
        .set('holes', new List(action.moles));
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;
