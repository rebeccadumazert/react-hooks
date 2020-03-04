import { useState } from 'react';

export const useToggle = initialState => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState(prevState => !prevState);
  };
  const toggleValue = value => {
    setState(value);
  };
  return {
    state,
    toggle,
    toggleValue,
  };
};
