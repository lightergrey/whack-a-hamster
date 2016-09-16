import luckio from 'luckio';

function getMole(id) {
  let hole;
  if (luckio(20)()) {
    hole = {
      id,
      mole: {
        whacked: false,
      },
    };
  } else {
    hole = {
      id,
    };
  }
  return hole;
}

export default function getHoles(count) {
  return Array(count).fill().map((_, id) => getMole(id));
}
