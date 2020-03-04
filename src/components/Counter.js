import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState('hello');
  const [img, setImg] = useState(
    'https://img.icons8.com/carbon-copy/100/000000/filled-like.png'
  );

  //   const [{}] = useState()

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

  const updateAllState = () => {
    setCounter(prevCounter => prevCounter + 1);
    setText('bye bye');
    setImg('https://img.icons8.com/doodle/48/000000/medical-heart.png');
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment : {counter}</button>
      <div>{time}</div>
      <button onClick={pauseTime}>Play/Pause</button>
      <p>counter : {counter}</p>
      <p>{text}</p>
      <img src={img} alt="" />
      <button onClick={updateAllState}>CHANGE ALL</button>
    </div>
  );
};
