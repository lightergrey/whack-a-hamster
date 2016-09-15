/**
*
* Score
*
*/

import React from 'react';

function Score({ score }) {
  return (
    <h2>Score: { score }</h2>
  );
}

Score.propTypes = {
  score: React.PropTypes.number.isRequired,
};

export default Score;
