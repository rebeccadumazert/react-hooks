import React from 'react';
import { useArray } from '../hooks/useArray';

export const UseArray = () => {
  const { clear, value, add, pop, insertAtIndex } = useArray([
    'banane ',
    'citron ',
    'pomme ',
    'pêche ',
    'fraises ',
  ]);
  return (
    <div>
      {value}
      <button onClick={clear}>Clear</button>
      <button onClick={add.bind(null, 'coucouuuu')}>Add Something</button>
      <button onClick={pop}>Delete Last El</button>
      <button onClick={insertAtIndex.bind(null, 2, 'salut!!')}>
        Add To Index
      </button>
    </div>
  );
};
