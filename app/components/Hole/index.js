/**
*
* Hole
*
*/

import React from 'react';
import Mole from '../Mole';

import styles from './styles.css';

function Hole({ mole, onClickMole }) {
  let content;
  if (mole) {
    content = <Mole onClickMole={onClickMole} />;
  }

  return (
    <div className={styles.hole}>
      {content}
    </div>
  );
}

Hole.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
  mole: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.bool,
  ]),
};

export default Hole;
