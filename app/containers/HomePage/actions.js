/*
 * Home Actions
 */

import {
  INCREMENT_SCORE,
} from './constants';

/**
 * Icrements the score by 1
 *
 * @return {object}    An action object with a type of INCREMENT_SCORE
 */
export function incrementScore() {
  return {
    type: INCREMENT_SCORE,
  };
}
