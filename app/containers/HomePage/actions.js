/*
 * Home Actions
 */

import {
  START_GAME,
  GENERATE_HOLES,
  INCREMENT_SCORE,
} from './constants';

export function startGame() {
  return {
    type: START_GAME,
  };
}

export function generateHoles() {
  return {
    type: GENERATE_HOLES,
  };
}

export function incrementScore() {
  return {
    type: INCREMENT_SCORE,
  };
}
