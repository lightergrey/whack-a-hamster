/**
*
* Holes
*
*/

import React from 'react';
import Hole from '../Hole';

import styles from './styles.css';

function Holes({ holes, onClickMole }) {
  let content;
  const width = 4; // TODO; fix
  if (holes) {
    const rows = (
      holes.map((hole, i) => (
        i % width === 0 ? holes.slice(i, i + width) : null
      )).filter((e) => e)
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
  ]),
};

export default Holes;
