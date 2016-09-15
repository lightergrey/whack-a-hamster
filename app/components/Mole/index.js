/**
*
* Mole
*
*/

import React from 'react';

import styles from './styles.css';

function Mole({ mole, onClickMole }) {
  let content = mole.whacked ? '🍕' : '🐹';
  return (
    <div className={styles.mole} onClick={onClickMole}>{content}</div>
  );
}

Mole.propTypes = {
  mole: React.PropTypes.object,
  onClickMole: React.PropTypes.func.isRequired,
};

export default Mole;
