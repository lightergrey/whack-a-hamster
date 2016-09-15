import luckio from 'luckio';

export default function getMoles(count) {
  const isLucky = luckio(20);
  return Array(count).fill().map(() => isLucky());
}
