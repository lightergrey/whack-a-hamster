/**
*
* Hole
*
*/

import React from 'react';
import Mole from '../Mole';

import styles from './styles.css';

function Hole({ hole, onWhackMole }) {
  let content;
  if (hole.mole) {
    content = <Mole mole={hole.mole} onWhackMole={onWhackMole} />;
  }

  return (
    <div className={styles.hole}>
      {content}
    </div>
  );
}

Hole.propTypes = {
  onWhackMole: React.PropTypes.func.isRequired,
  hole: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Hole;
