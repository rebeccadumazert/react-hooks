import React from 'react';
import { Counter } from './components/Counter';
import { UseToggle } from './components/UseToggle';
import { UseArray } from './components/UseArray';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <UseToggle></UseToggle> */}
      <UseArray></UseArray>
    </div>
  );
}

export default App;
