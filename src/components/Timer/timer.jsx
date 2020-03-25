import React, { Component } from 'react';
import { Button } from 'antd';
import timer from '../timeFormatter';
import './timer.css';

// eslint-disable-next-line react/prefer-stateless-function
const initialState = {
  count: 0,
  start: false,
  startTime: 0,
};
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  startTimer = () => {
    this.setState(
      state => ({
        start: !state.start,
        startTime: Date.now() - state.count,
      }),
      () => {
        const timerGo = () => {
          this.timerId = setTimeout(() => {
            const { start } = this.state;
            if (!start) {
              clearTimeout(this.timerId);
              return;
            }
            this.setState(state => ({
              count: Date.now() - state.startTime,
            }));
            timerGo();
          }, 25);
        };
        timerGo();
      }
    );
  };

  resetTimer = () => {
    clearTimeout(this.timerId);
    this.setState(initialState);
  };

  render() {
    const { count, start } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.startTimer} className="btn">
          {start === true ? 'pause' : 'start'}
        </Button>
        <div className="showTime">The timer is {timer(count)}</div>
        <Button type="primary" onClick={this.resetTimer} className="btn">
          Reset
        </Button>
      </div>
    );
  }
}
