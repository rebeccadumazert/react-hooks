import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isPause, setPause] = useState(true);

  useEffect(() => {
    if (!isPause) {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        console.log(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPause]);

  const pauseTime = () => {
    setPause(prevPause => !prevPause);
    console.log(isPause);
  };

  const incrementCounter = () => setCounter(prevCounter => prevCounter + 1);

  return (
    <div>
      <button onClick={incrementCounter}>Increment : {counter}</button>
      <div>{time}</div>
      <button onClick={pauseTime}>Play/Pause</button>
    </div>
  );
};
