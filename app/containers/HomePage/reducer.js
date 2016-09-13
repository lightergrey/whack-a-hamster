/*
 * Home Reducer
 */

import {
  INCREMENT_SCORE,
  GENERATE_GRID,
} from './constants';

import { List, fromJS } from 'immutable';

function generateGrid(size) {
  const grid = new List(
    Array(size).fill().map(() => Array(size))
  );
  return grid;
}

const initialState = fromJS({
  score: 0,
  size: 4, // This will be setable in the future
  grid: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return state
        .set('score', state.get('score') + 1);
    case GENERATE_GRID:
      return state
        .set('grid', generateGrid(state.get('size')));
    default:
      return state;
  }
}

export default homeReducer;
