/*
 * HomePage
 */

import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { createStructuredSelector } from 'reselect';
import {
  startGame,
  whackMole,
} from './actions';

import StartButton from 'components/StartButton';
import Score from 'components/Score';
import Holes from 'components/Holes';

import {
  selectIsStarted,
  selectIsFinished,
  selectHoles,
  selectWidth,
  selectScore,
} from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let startButton;
    if (!this.props.isStarted) {
      startButton = (
        <StartButton onClickStart={this.props.onClickStart}>Start</StartButton>
      );
    }

    let score;
    if (this.props.isFinished) {
      score = (
        <Score score={this.props.score} />
      );
    }

    return (
      <div className={styles.homePage}>
        {score}
        {startButton}
        <Holes
          onClickMole={this.props.onClickMole}
          holes={this.props.holes}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  isStarted: React.PropTypes.bool,
  isFinished: React.PropTypes.bool,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  width: React.PropTypes.number.isRequired,
  score: React.PropTypes.number,
  onClickStart: React.PropTypes.func,
  onClickMole: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onClickStart: () => {
      dispatch(startGame());
    },
    onClickMole: (id) => {
      dispatch(whackMole(id));
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  isStarted: selectIsStarted(),
  isFinished: selectIsFinished(),
  holes: selectHoles(),
  width: selectWidth(),
  score: selectScore(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
