/**
*
* Mole
*
*/

import React from 'react';

import styles from './styles.css';

function Mole({ mole, onWhackMole }) {
  const content = mole.whacked ? '👊' : '🐹';
  const onClick = () => {
    if (!mole.whacked) {
      onWhackMole();
    }
  };

  return (
    <div className={styles.mole} onClick={onClick}>{content}</div>
  );
}

Mole.propTypes = {
  mole: React.PropTypes.object.isRequired,
  onWhackMole: React.PropTypes.func.isRequired,
};

export default Mole;
