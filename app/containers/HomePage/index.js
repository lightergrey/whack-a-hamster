/*
 * HomePage
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectScore } from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
      </div>
    );
  }
}

HomePage.propTypes = {
  score: React.PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  score: selectScore(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
