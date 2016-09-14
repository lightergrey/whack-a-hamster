/**
*
* Grid
*
*/

import React from 'react';
import Hole from '../Hole';

import styles from './styles.css';

function Grid({ width, holes, onClickMole }) {
  let content;
  if (holes) {
    const grid = holes.reduce((prev, val, i, arr) => (
      (!(i % width) ? (prev.push(arr.slice(i, i + width)), prev) : prev)
    ), []);

    content = (
      grid.map((row, index) => (
        <div className={styles.row} key={`row-${index}`}>
          {row.map((item, i) => <Hole mole={item} key={`item-${i}`} onClickMole={onClickMole} />)}
        </div>
        )
      )
    );
  }

  return (
    <div className={styles.grid}>
      {content}
    </div>
  );
}

Grid.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default Grid;
