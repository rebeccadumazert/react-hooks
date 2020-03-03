import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);
  });

  const incrementCounter = () => setCounter(prevCounter => prevCounter + 1);

  return (
    <div>
      <button onClick={incrementCounter}>Increment : {counter}</button>
      <div>{time}</div>
    </div>
  );
};
