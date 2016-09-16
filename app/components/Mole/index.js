/**
*
* Mole
*
*/

import React from 'react';

import styles from './styles.css';

function Mole({ mole, onClickMole }) {
  const content = mole.whacked ? '👊' : '🐹';
  const onWhack = () => {
    if (!mole.whacked) {
      onClickMole();
    }
  };
  return (
    <div className={styles.mole} onClick={onWhack}>{content}</div>
  );
}

Mole.propTypes = {
  mole: React.PropTypes.object,
  onClickMole: React.PropTypes.func.isRequired,
};

export default Mole;
