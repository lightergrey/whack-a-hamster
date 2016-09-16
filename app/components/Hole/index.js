/**
*
* Hole
*
*/

import React from 'react';
import Mole from '../Mole';

import styles from './styles.css';

function Hole({ hole, onClickMole }) {
  let content;
  if (hole.mole) {
    content = <Mole mole={hole.mole} onClickMole={onClickMole} />;
  }

  return (
    <div className={styles.hole}>
      {content}
    </div>
  );
}

Hole.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
  hole: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default Hole;
