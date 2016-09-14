/**
*
* Grid
*
*/

import React from 'react';
import Hole from '../Hole';

function Grid({ width, height, holes, onClickMole }) {
  let content;
  if (holes) {
    content = (
      holes.map((item, index) => (
        <Hole mole={item} key={`item-${index}`} onClickMole={onClickMole} />
      ))
    );
  }

  return (
    <div id="grid">
      {content}
    </div>
  );
}

Grid.propTypes = {
  onClickMole: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Grid;
