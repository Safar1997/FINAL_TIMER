(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{108:function(t,e,a){t.exports=a(207)},113:function(t,e,a){},114:function(t,e,a){},115:function(t,e,a){},207:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),i=(a(113),a(114),a(209)),c=a(33),u=a(34),m=a(36),l=a(35),f=a(37),h=a(212),d=function(t){var e=Math.floor(Math.floor(t/1e3)/60),a=Math.floor(t/1e3)-60*e,n=Math.floor((t-1e3*a-60*e*1e3)/10);return"".concat(e.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"))},T=(a(115),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(m.a)(this,Object(l.a)(e).call(this,t))).startTimer=function(){a.setState((function(t){return{start:!t.start,startTime:Date.now()-t.count}}),(function(){!function t(){a.timerId=setTimeout((function(){a.state.start?(a.setState((function(t){return{count:Date.now()-t.startTime}})),t()):clearTimeout(a.timerId)}),25)}()}))},a.resetTimer=function(){clearTimeout(a.timerId),a.setState({count:0,start:!1,startTime:0})},a.state={count:0,start:!1,startTime:0},a}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.count,a=t.start;return r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",onClick:this.startTimer,className:"btn"},!0===a?"pause":"start"),r.a.createElement("div",{className:"showTime"},"The timer is ",d(e)),r.a.createElement(h.a,{type:"primary",onClick:this.resetTimer,className:"btn"},"Reset"))}}]),e}(n.Component)),p=a(208),b=a(213),C=(a(83),a(211)),E=function(t){function e(){return Object(c.a)(this,e),Object(m.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.ss,a=t.timeToCount,n=Math.floor(e/a*100);return r.a.createElement("div",null,r.a.createElement(C.a,{percent:n,status:"active",className:"progressBar"}),r.a.createElement("div",null,"Time left : ",d(e)))}}]),e}(n.Component);E.defaultProps={ss:0,timeToCount:0};var v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(m.a)(this,Object(l.a)(e).call(this,t))).sliderChange=function(t){a.setState({timeToCount:1e3*t})},a.minutesChange=function(t){a.setState((function(e){return{timeToCount:1e3*(60*t+Math.floor(e.timeToCount/1e3)%60)}}))},a.secondsChange=function(t){a.setState((function(e){return{timeToCount:1e3*(t%60+60*Math.floor(Math.floor(e.timeToCount/1e3)/60))}}))},a.startOrPause=function(){a.setState((function(t){return{start:!t.start,startTime:Date.now()-t.count}}),(function(){!function t(){a.timerId=setTimeout((function(){a.state.start?(a.setState((function(t){return{count:Date.now()-t.startTime,ss:t.timeToCount-(Date.now()-t.startTime)}})),t()):clearTimeout(a.timerId)}),25)}()}))},a.resetTimer=function(){clearTimeout(a.timerId),a.setState({count:0,start:!1,startTime:0,ss:0})},a.minOrSecValue=function(t){return function(){var e=a.state.timeToCount,n=Math.floor(e/1e3)%60,r=Math.floor(Math.floor(e/1e3)/60);return 720===r&&(n=0),"minutes"===t?r=r<10?"0".concat(r):r:n}},a.state={start:!1,count:0,timeToCount:0,ss:0},a}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.ss,a=t.start,n=t.timeToCount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{step:15,min:0,max:3600,disabled:0!==e,className:"slider",onChange:this.sliderChange}),r.a.createElement(b.a,{max:720,min:0,value:this.minOrSecValue("minutes")(),placeholder:"Minutes",className:"inputTime",onChange:this.minutesChange,disabled:0!==e}),r.a.createElement(b.a,{max:60,min:0,value:this.minOrSecValue("seconds")(),placeholder:"Seconds",rype:"number",className:"inputTime",onChange:this.secondsChange,disabled:0!==e}),r.a.createElement(E,{ss:e,timeToCount:n}),r.a.createElement(h.a,{type:"primary",onClick:this.startOrPause,className:"btn"},a?"pause":"start"),r.a.createElement(h.a,{type:"primary",onClick:this.resetTimer,className:"btn"},"Reset"))}}]),e}(n.Component),O=i.a.TabPane,S=function(t){console.log(t)},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{defaultActiveKey:"1",onChange:S},r.a.createElement(O,{tab:"Tab 1",key:"1"},r.a.createElement(T,null)),r.a.createElement(O,{tab:"Tab 2",key:"2"},r.a.createElement(v,null))))};s.a.render(r.a.createElement(g,null),document.getElementById("root"))},83:function(t,e,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.e4fe197c.chunk.js.map