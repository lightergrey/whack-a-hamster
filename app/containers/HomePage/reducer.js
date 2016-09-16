/*
 * Home Reducer
 */

import {
  START_GAME,
  END_GAME,
  SET_HOLES,
  WHACK_MOLE,
} from './constants';

import { List, fromJS } from 'immutable';

const initialState = fromJS({
  width: 4, // This will be setable in the future
  height: 4, // This will be setable in the future
  rounds: 2, // This will be setable in the future
  duration: 1750, // This will be setable in the future
  moleCount: 3, // This will be setable in the future
  isStarted: false,
  isFinished: false,
  holes: false,
  score: 0,
});

function holeReducer(state, action) {
  switch (action.type) {
    case WHACK_MOLE:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        mole: {
          whacked: true,
        },
      });
    default:
      return state;
  }
}

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
    case SET_HOLES:
      return state
        .set('holes', new List(action.holes));
    case WHACK_MOLE:
      return state
        .set('holes', state.get('holes').map(hole => holeReducer(hole, action)))
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;
