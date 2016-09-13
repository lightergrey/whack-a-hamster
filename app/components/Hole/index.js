/**
*
* Hole
*
*/

import React from 'react';

import styles from './styles.css';

function Hole({ content }) {
  return (
    <div className={styles.hole}>
      {content}
    </div>
  );
}

Hole.propTypes = {
  content: React.PropTypes.node,
};

export default Hole;
