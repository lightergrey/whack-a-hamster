/**
*
* Holes
*
*/

import React from 'react';
import Hole from '../Hole';

import styles from './styles.css';

function Holes({ holes, onClickMole, width }) {
  let content;
  if (holes) {
    const rows = (
      holes.map((hole, i) => {
        if (i % width === 0) {
          return holes.slice(i, i + width);
        }
        return null;
      }).filter((e) => e)
    );

    content = (
      rows.map((row, rowIndex) => (
        <div className={styles.row} key={`row-${rowIndex}`}>
          {row.map((hole) =>
            <Hole
              hole={hole}
              key={`hole-${hole.id}`}
              onClickMole={() => onClickMole(hole.id)}
            />
          )}
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

Holes.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Holes;
