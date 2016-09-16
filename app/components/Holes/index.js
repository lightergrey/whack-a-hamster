/**
*
* Holes
*
*/

import React from 'react';
import Hole from '../Hole';

import styles from './styles.css';

function Holes({ holes, onWhackHamster, width }) {
  let content;
  if (holes) {
    // Split the array of holes into rows based on width
    const rows = (
      holes.map((hole, i) => {
        if (i % width === 0) {
          return holes.slice(i, i + width);
        }
        return null;
      }).filter((e) => e)
    );

    // Render the holes from the rows
    content = (
      rows.map((row, rowIndex) => (
        <div className={styles.row} key={`row-${rowIndex}`}>
          {row.map((hole) =>
            <Hole
              hole={hole}
              key={`hole-${hole.id}`}
              onWhackHamster={() => onWhackHamster(hole.id)}
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
  onWhackHamster: React.PropTypes.func.isRequired,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Holes;
