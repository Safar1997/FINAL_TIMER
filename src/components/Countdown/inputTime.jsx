import React, { Component } from 'react';
import { Button, Slider, InputNumber } from 'antd';
import './countdown.css';
import Countdownn from './countdown';

// eslint-disable-next-line react/prefer-stateless-function
export default class InputTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      sliderValue: 0,
      start: false,
      count: 0,
      disabled: false,
      startTime: 0,
    };
  }

  componentDidUpdate() {
    const { start, count } = this.state;
    if (start && count < 1) {
      clearInterval(this.myInterval);
    }
  }

  sliderChange = value => {
    const minutes = Math.trunc((value * 100) / 100);
    let seconds;
    switch ((value * 100) % 100) {
      case 25:
        seconds = 15;
        break;
      case 50:
        seconds = 30;
        break;
      case 75:
        seconds = 45;
        break;
      default:
        seconds = 0;
        break;
    }
    this.setState({
      minutes,
      seconds,
      sliderValue: value,
      count: (minutes * 60 + seconds) * 1000,
      startTime: (minutes * 60 + seconds) * 1000,
    });
  };

  minutesChange = value => {
    this.setState({
      minutes: value > 720 ? 720 : value,
    });
    this.setState(({ minutes, seconds }) => ({
      seconds: minutes >= 720 ? 0 : seconds,
    }));
    this.setState(({ minutes, seconds }) => ({
      count: (minutes * 60 + seconds) * 1000,
      startTime: (minutes * 60 + seconds) * 1000,
    }));
  };

  secondsChange = value => {
    const { minutes } = this.state;
    this.setState({
      seconds: minutes >= 720 ? 0 : value,
    });
    this.setState(({ seconds }) => ({
      count: (minutes * 60 + seconds) * 1000,
      startTime: (minutes * 60 + seconds) * 1000,
    }));
  };

  startOrPause = () => {
    this.setState(state => ({
      start: !state.start,
      disabled: true,
    }));
    this.setState(state => {
      const { start } = state;
      if (start) {
        this.myInterval = setInterval(() => {
          this.setState(({ count }) => ({
            count: count - 3,
          }));
        }, 1);
      } else {
        clearInterval(this.myInterval);
      }
    });
  };

  resetTimer = () => {
    this.setState({
      start: false,
      count: 0,
      minutes: 0,
      seconds: 0,
      sliderValue: 0,
      disabled: false,
    });
    clearInterval(this.myInterval);
  };

  render() {
    const { minutes, seconds, sliderValue, count, disabled, startTime } = this.state;
    return (
      <>
        <Slider
          step={0.25}
          min={0}
          max={60}
          disabled={disabled}
          className="slider"
          onChange={this.sliderChange}
          value={sliderValue}
        />
        <InputNumber
          max={720}
          min={0}
          value={minutes}
          placeholder="Minutes"
          type="number"
          className="inputTime"
          onChange={this.minutesChange}
          disabled={disabled}
        />
        <InputNumber
          max={60}
          min={0}
          value={seconds}
          placeholder="Seconds"
          rype="number"
          className="inputTime"
          onChange={this.secondsChange}
          disabled={disabled}
        />
        <Countdownn
          minutes={minutes}
          seconds={seconds}
          count={Math.floor(count)}
          startTime={startTime}
        />
        <Button type="primary" onClick={this.startOrPause} className="btn">
          Start/Pause
        </Button>
        <Button type="primary" onClick={this.resetTimer} className="btn">
          Reset
        </Button>
      </>
    );
  }
}
