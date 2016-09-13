/*
 * Home Reducer
 */

import {
  INCREMENT_SCORE,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  score: 0,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    default:
      return state;
  }
}

export default homeReducer;
