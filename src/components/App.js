import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState(0);

  const handleKeyDown = (event) => {
    if (event.keyCode !== 13) return; //if its not ENTER,
    let tempTime = event.target.value;
    if (tempTime < 0 || isNaN(tempTime)) tempTime = 0;
    setTime(Math.floor(tempTime));
  };
  useEffect(() => {
    let interval = null;
    if (time > 0) {
      interval = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
