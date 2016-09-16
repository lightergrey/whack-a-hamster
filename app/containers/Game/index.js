/*
 * Game
 */

import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { createStructuredSelector } from 'reselect';
import {
  startGame,
  whackHamster,
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

export class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <div className={styles.game}>
        {score}
        {startButton}
        <Holes
          onWhackHamster={this.props.onWhackHamster}
          holes={this.props.holes}
          width={this.props.width}
        />
      </div>
    );
  }
}

Game.propTypes = {
  isStarted: React.PropTypes.bool.isRequired,
  isFinished: React.PropTypes.bool.isRequired,
  holes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  width: React.PropTypes.number.isRequired,
  score: React.PropTypes.number.isRequired,
  onClickStart: React.PropTypes.func.isRequired,
  onWhackHamster: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onClickStart: () => {
      dispatch(startGame());
    },
    onWhackHamster: (id) => {
      dispatch(whackHamster(id));
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);
