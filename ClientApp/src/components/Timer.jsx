import React, { useState, useEffect } from "react";
import { BubbleSort } from "./BubbleSort";

export const TimerContext = React.createContext(0);

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          // onTick && onTick(seconds + 1);
          return seconds + 1;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <TimerContext.Provider value={seconds}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default Timer;
