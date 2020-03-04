import { useState } from 'react';

export const useArray = initialState => {
  const [state, setState] = useState(initialState);
  const clear = () => {
    setState([]);
  };
  const add = value => {
    setState([...state, value]);
  };

  const pop = () => {
    setState(state.slice(0, state.length - 1));
  };

  const insertAtIndex = (i, val) => {
    setState([...state.slice(0, i), val, ...state.slice(i)]);
  };

  return {
    clear,
    value: state,
    add,
    pop,
    insertAtIndex,
  };
};
