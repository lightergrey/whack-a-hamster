/**
*
* Grid
*
*/

import React, { PropTypes } from 'react';

function Grid({ grid }) {
  return (
    <div id="grid">
      {grid}
    </div>
  );
}

Grid.propTypes = {
  grid: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.boolean,
  ]),
};

export default Grid;
