/*
 * HomePage
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
  startGame,
  incrementScore,
} from './actions';

import StartButton from 'components/StartButton';
import Score from 'components/Score';
import Grid from 'components/Grid';

import {
  selectIsStarted,
  selectHoles,
  selectScore,
} from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Score score={this.props.score} />
        <Grid onClickMole={this.props.onClickMole} width={4} height={4} holes={this.props.holes} />
        <StartButton onClickStart={this.props.onClickStart}>Start</StartButton>
      </div>
    );
  }
}

HomePage.propTypes = {
  isStarted: React.PropTypes.bool,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  score: React.PropTypes.number,
  onClickStart: React.PropTypes.func,
  onClickMole: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onClickStart: () => {
      dispatch(startGame());
    },
    onClickMole: () => {
      dispatch(incrementScore());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  isStarted: selectIsStarted(),
  holes: selectHoles(),
  score: selectScore(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
