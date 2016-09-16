/*
 * Game Reducer
 */

import {
  START_GAME,
  END_GAME,
  SET_HOLES,
  WHACK_HAMSTER,
} from './constants';

import { List, fromJS } from 'immutable';

const initialState = fromJS({
  width: 4,       // This can be configurable in the future
  height: 4,      // This can be configurable in the future
  rounds: 4,      // This can be configurable in the future
  duration: 1250, // This can be configurable in the future
  hamsterCount: 3,   // This can be configurable in the future
  isStarted: false,
  isFinished: false,
  holes: false,
  score: 0,
});

function holeReducer(state, action) {
  switch (action.type) {
    case WHACK_HAMSTER:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        hamster: {
          whacked: true,
        },
      });
    default:
      return state;
  }
}

function gameReducer(state = initialState, action) {
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
    case WHACK_HAMSTER:
      return state
        .set('holes', state.get('holes').map(hole => holeReducer(hole, action)))
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default gameReducer;
