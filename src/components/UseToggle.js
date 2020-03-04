import React from 'react';
import { useToggle } from '../hooks/useToggle';

export const UseToggle = () => {
  const { state, toggle, toggleValue } = useToggle(false);
  return (
    <div>
      {state.toString()}
      <button onClick={toggle}>TOGGLE</button>
      <button onClick={toggleValue.bind(null, 'true')}>TOGGLE TRUE</button>
      <button onClick={toggleValue.bind(null, 'false')}>TOGGLE FALSE</button>
    </div>
  );
};
