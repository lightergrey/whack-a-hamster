/**
 * Finds index of an unfilled hole in array of holes at random.
 * TODO: there is a possibility of an infinite loop if all holes are filled
 *
 * @param  {array} holes An array of objects representing holes.
 *
 * @return {number}      The index of an empty hole
 */
function getIndexOfRandomUnfilledHole(holes) {
  const holeIndex = Math.floor(Math.random() * holes.length);
  return (typeof holes[holeIndex].mole === 'undefined') ? holeIndex : getIndexOfRandomUnfilledHole(holes);
}

/**
 * Returns an array of holes of certain length filled at random
 * with a number of moles.
 *
 * @param  {number} length    The desired number of holes.
 * @param  {number} moleCount The desired number of moles.
 *
 * @return {array}  holes     An array of objects representing holes.
 */
export default function getHoles(length, moleCount) {
  const holes = Array(length).fill().map((_, id) => ({ id }));

  Array(moleCount).fill().forEach(() => {
    const mole = {
      whacked: false,
    };
    const holeIndex = getIndexOfRandomUnfilledHole(holes);
    holes[holeIndex] = Object.assign(holes[holeIndex], { mole });
  });

  return holes;
}
