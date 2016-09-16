function getRandomUnfilledHole(holes) {
  const holeIndex = Math.floor(Math.random() * holes.length);
  return (typeof holes[holeIndex].mole === 'undefined') ? holeIndex : getRandomUnfilledHole(holes);
}

export default function getHoles(length, moleCount) {
  const holes = Array(length).fill().map((_, id) => ({ id }));

  Array(moleCount).fill().forEach(() => {
    const mole = {
      whacked: false,
    };
    const holeIndex = getRandomUnfilledHole(holes);
    holes[holeIndex] = Object.assign(holes[holeIndex], { mole });
  });

  return holes;
}
