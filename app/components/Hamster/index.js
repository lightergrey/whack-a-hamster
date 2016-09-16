/**
*
* Hamster
*
*/

import React from 'react';

import styles from './styles.css';

function Hamster({ hamster, onWhackHamster }) {
  const content = hamster.whacked ? '👊' : '🐹';
  const onClick = () => {
    if (!hamster.whacked) {
      onWhackHamster();
    }
  };

  return (
    <div className={styles.hamster} onClick={onClick}>{content}</div>
  );
}

Hamster.propTypes = {
  hamster: React.PropTypes.object.isRequired,
  onWhackHamster: React.PropTypes.func.isRequired,
};

export default Hamster;
