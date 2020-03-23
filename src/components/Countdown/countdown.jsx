import React, { Component } from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import './countdown.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Countdownn extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     progress: 0,
  //     start: false,
  //     minutesP: 0,
  //     secondsP: 0,
  //   };
  // }

  render() {
    const { minutes, seconds, count, startTime } = this.props;
    const showTime = timeInSecs => {
      const mins = Math.floor(Math.floor(timeInSecs / 1000) / 60);
      const secs = Math.floor(timeInSecs / 1000) - mins * 60;
      const milise = Math.floor((timeInSecs - secs * 1000 - mins * 60 * 1000) / 10);
      const outPut = `${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}:${milise.toString().padStart(2, '0')}`;
      return outPut;
    };

    const newCount = count < 0 ? `00:00` : showTime(count);

    const progressBar =
      count === startTime
        ? Math.floor(count / startTime) * 100
        : Math.floor((count / startTime) * 100) % 100;

    return (
      <div>
        <Progress percent={progressBar} status="active" className="progressBar" />
        <div>
          Timer: minutes: {minutes}, seconds: {seconds} or {newCount}
        </div>
      </div>
    );
  }
}
Countdownn.defaultProps = {
  minutes: 0,
  seconds: 0,
  startTime: 0,
  count: 0,
};
Countdownn.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  startTime: PropTypes.number,
  count: PropTypes.number,
};
