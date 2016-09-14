/*
 * Home Actions
 */

import {
  START_GAME,
  INCREMENT_SCORE,
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
