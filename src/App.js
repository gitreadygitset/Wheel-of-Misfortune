import './App.css';
import React from 'react'
import Wheel from './Components/Wheel1'
import TriviaDisplay from './Components/TriviaDisplay'

function App() {

  return (
    <div>
      <h1>Wheel of Misfortune</h1>
      <div className="App">
        <TriviaDisplay/>
        <Wheel/>
      </div>
    </div>
  );
}

export default App;
