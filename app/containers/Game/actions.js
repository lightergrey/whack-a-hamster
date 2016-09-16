/*
 * Game Actions
 */

import {
  START_GAME,
  END_GAME,
  SET_HOLES,
  WHACK_HAMSTER,
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

export function setHoles(holes) {
  return {
    type: SET_HOLES,
    holes,
  };
}

export function whackHamster(id) {
  return {
    type: WHACK_HAMSTER,
    id,
  };
}
