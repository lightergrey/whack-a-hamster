/**
*
* Hole
*
*/

import React from 'react';
import Hamster from '../Hamster';

import styles from './styles.css';

function Hole({ hole, onWhackHamster }) {
  let content;
  if (hole.hamster) {
    content = <Hamster hamster={hole.hamster} onWhackHamster={onWhackHamster} />;
  }

  return (
    <div className={styles.hole}>
      {content}
    </div>
  );
}

Hole.propTypes = {
  onWhackHamster: React.PropTypes.func.isRequired,
  hole: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Hole;
