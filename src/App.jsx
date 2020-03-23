import React from 'react';
import './App.css';
import { Tabs } from 'antd';
import Timer from './components/Timer/index';
import InputTime from './components/Countdown/inputTime';

const { TabPane } = Tabs;

const callback = key => {
  console.log(key);
};

const App = () => (
  <div className="App">
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        <Timer />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <InputTime />
      </TabPane>
    </Tabs>
  </div>
);

export default App;
