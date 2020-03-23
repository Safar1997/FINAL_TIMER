import React, { Component } from 'react';
import { Button } from 'antd';
import './timer.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      start: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  startTimer = () => {
    this.setState(state => ({
      start: !state.start,
    }));
    this.setState(state => {
      const { start } = state;
      if (start) {
        this.myInterval = setInterval(() => {
          this.setState(({ count }) => ({
            count: count + 1,
          }));
        }, 10);
      } else {
        clearInterval(this.myInterval);
      }
    });
  };

  resetTimer = () => {
    this.setState({
      start: false,
      count: 0,
    });
    clearInterval(this.myInterval);
  };

  render() {
    const { count } = this.state;

    const dividOn = number => {
      const minutes =
        Math.floor(number / 6000) >= 10
          ? Math.floor(number / 6000)
          : `0${Math.floor(number / 6000)}`;
      const seconds =
        Math.floor((number % 6000) / 10) >= 100
          ? Math.floor((number % 6000) / 100)
          : `0${Math.floor((number % 6000) / 100)}`;

      const mili = number % 100 >= 10 ? number % 100 : `0${number % 100}`;
      return `${minutes}:${seconds}:${mili}`;
    };

    return (
      <div>
        <Button type="primary" onClick={this.startTimer} className="btn">
          Start/Pause
        </Button>
        The timer is {dividOn(count)}
        <Button type="primary" onClick={this.resetTimer} className="btn">
          Reset
        </Button>
      </div>
    );
  }
}
