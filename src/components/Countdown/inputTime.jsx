import React, { Component } from 'react';
import { Button, Slider, InputNumber } from 'antd';
import './countdown.css';
import soundfile from './voice/audio.mp3';
import Countdownn from './countdown';

// eslint-disable-next-line react/prefer-stateless-function
export default class InputTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      count: 0,
      timeToCount: 0,
      currentTime: 0,
      didStart: false,
    };
  }

  sliderChange = value => {
    this.setState({
      timeToCount: value * 1000,
    });
  };

  minutesChange = value => {
    this.setState(state => ({
      timeToCount: (value * 60 + (Math.floor(state.timeToCount / 1000) % 60)) * 1000,
    }));
  };

  secondsChange = value => {
    this.setState(state => ({
      timeToCount:
        ((value % 60) + Math.floor(Math.floor(state.timeToCount / 1000) / 60) * 60) * 1000,
    }));
  };

  startOrPause = () => {
    this.setState(
      state => ({
        start: !state.start,
        startTime: Date.now() - state.count,
        didStart: true,
      }),
      () => {
        const timerGo = () => {
          this.timerId = setTimeout(() => {
            const { start } = this.state;
            if (!start) {
              clearTimeout(this.timerId);
              return;
            }
            this.setState(
              state => ({
                count: Date.now() - state.startTime,
                currentTime: state.timeToCount - (Date.now() - state.startTime),
              }),
              () => {
                const { currentTime, didStart } = this.state;
                if (currentTime < 24) {
                  this.setState({
                    didStart: false,
                  });
                }
                if (currentTime < 24 && didStart) {
                  clearTimeout(this.timerId);
                }
              }
            );
            timerGo();
          }, 25);
        };
        timerGo();
      }
    );
  };

  resetTimer = () => {
    clearTimeout(this.timerId);
    this.setState({
      count: 0,
      start: false,
      startTime: 0,
      currentTime: 0,
      didStart: false,
    });
  };

  minOrSecValue = id => () => {
    const { timeToCount } = this.state;
    let seconds = Math.floor(timeToCount / 1000) % 60;
    let minutes = Math.floor(Math.floor(timeToCount / 1000) / 60);
    if (minutes === 720) {
      seconds = 0;
    }
    if (id === 'minutes') {
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return minutes;
    }
    return seconds;
  };

  render() {
    const { currentTime, start, timeToCount } = this.state;
    const audio = new Audio(soundfile);

    if (currentTime < 0.2 && currentTime > 0.01) {
      audio.play();
    } else {
      audio.pause();
    }

    return (
      <>
        <Slider
          step={15}
          min={0}
          max={3600}
          disabled={currentTime !== 0}
          className="slider"
          onChange={this.sliderChange}
        />
        <InputNumber
          max={720}
          min={0}
          value={this.minOrSecValue('minutes')()}
          placeholder="Minutes"
          className="inputTime"
          onChange={this.minutesChange}
          disabled={currentTime !== 0}
        />
        <InputNumber
          max={60}
          min={0}
          value={this.minOrSecValue('seconds')()}
          placeholder="Seconds"
          rype="number"
          className="inputTime"
          onChange={this.secondsChange}
          disabled={currentTime !== 0}
        />
        <Countdownn currentTime={currentTime} timeToCount={timeToCount} />
        <Button type="primary" onClick={this.startOrPause} className="btn">
          {start ? 'pause' : 'start'}
        </Button>
        <Button type="primary" onClick={this.resetTimer} className="btn">
          Reset
        </Button>
      </>
    );
  }
}
