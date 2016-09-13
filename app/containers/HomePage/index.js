/*
 * HomePage
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { generateGrid } from './actions';

import StartButton from 'components/StartButton';

import {
  selectScore,
  selectGrid,
} from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <StartButton onClickStart={this.props.onClickStart}>Start</StartButton>
      </div>
    );
  }
}

HomePage.propTypes = {
  score: React.PropTypes.number,
  onClickStart: React.PropTypes.func,
  grid: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.bool,
  ]),
};

function mapDispatchToProps(dispatch) {
  return {
    onClickStart: () => {
      dispatch(generateGrid());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  score: selectScore(),
  grid: selectGrid(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
