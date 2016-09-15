/**
*
* StartButton
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

function StartButton({ onClickStart, children }) {
  return (
    <button className={styles.startButton} onClick={onClickStart}>
      {Children.toArray(children)}
    </button>
  );
}

StartButton.propTypes = {
  onClickStart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default StartButton;
