/**
*
* Mole
*
*/

import React from 'react';

import styles from './styles.css';

function Mole({ onClickMole }) {
  return (
    <div className={styles.mole} onClick={onClickMole}>🐹</div>
  );
}

Mole.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
};

export default Mole;
