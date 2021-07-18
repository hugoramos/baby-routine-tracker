import React from 'react';
import './App.css';
import BabyRoutineEvents from './BabyRoutineEvents';
// import SleepCycle from './SleepCycle';

function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <span className="title">Rotina do Raul</span><br />
      </header>
      {/* <SleepCycle></SleepCycle> */}
      <BabyRoutineEvents></BabyRoutineEvents>
    </div>
  );
}

export default App;
