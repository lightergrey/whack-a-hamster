/*
 * Home Actions
 */

import {
  INCREMENT_SCORE,
  GENERATE_GRID,
} from './constants';

export function incrementScore() {
  return {
    type: INCREMENT_SCORE,
  };
}

export function generateGrid() {
  return {
    type: GENERATE_GRID,
  };
}
