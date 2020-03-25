import React, { Component } from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import timer from '../timeFormatter';
import './countdown.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Countdownn extends Component {
  render() {
    const { currentTime, timeToCount } = this.props;
    const progress = Math.floor((currentTime / timeToCount) * 100);
    return (
      <div>
        <Progress percent={progress} status="active" className="progressBar" />
        <div>Time left : {timer(currentTime)}</div>
      </div>
    );
  }
}
Countdownn.defaultProps = {
  currentTime: 0,
  timeToCount: 0,
};
Countdownn.propTypes = {
  currentTime: PropTypes.number,
  timeToCount: PropTypes.number,
};
