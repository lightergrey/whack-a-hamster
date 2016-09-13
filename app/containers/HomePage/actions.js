/*
 * Home Actions
 */

import {
  START_GAME,
  INCREMENT_SCORE,
  GENERATE_GRID,
} from './constants';

export function startGame() {
  return {
    type: START_GAME,
  };
}

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
