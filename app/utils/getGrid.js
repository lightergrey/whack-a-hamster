import luckio from 'luckio';

function getMole() {
  return luckio(20)() ? ({ whacked: false }) : false;
}

export default function getGrid(width, height) {
  return Array(height).fill().map(() => Array(width).fill().map(() => getMole()));
}
