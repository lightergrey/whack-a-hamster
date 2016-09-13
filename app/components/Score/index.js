/**
*
* Score
*
*/

import React from 'react';

import styles from './styles.css';

function Score(props) {
  return (
    <div className={styles.score}>
      <h2>Score: { props.score }</h2>
    </div>
  );
}

Score.propTypes = {
  score: React.PropTypes.number.isRequired,
};


export default Score;
