/**
*
* StartButton
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

function StartButton(props) {
  return (
    <button className={styles.startButton} onClick={props.onClickStart}>
      {Children.toArray(props.children)}
    </button>
  );
}

StartButton.propTypes = {
  onClickStart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default StartButton;
