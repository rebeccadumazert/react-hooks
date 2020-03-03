import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => setCounter(prevCounter => prevCounter + 1);
  return (
    <div>
      <button onClick={incrementCounter}>Increment : {counter}</button>
    </div>
  );
};
