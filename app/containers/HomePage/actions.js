/*
 * Home Actions
 */

import {
  START_GAME,
  END_GAME,
  POPULATE_HOLES,
  INCREMENT_SCORE,
} from './constants';

export function startGame() {
  return {
    type: START_GAME,
  };
}

export function endGame() {
  return {
    type: END_GAME,
  };
}

export function populateHoles(moles) {
  return {
    type: POPULATE_HOLES,
    moles,
  };
}

export function incrementScore() {
  return {
    type: INCREMENT_SCORE,
  };
}
