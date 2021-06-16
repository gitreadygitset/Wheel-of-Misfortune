import './App.css';
import React, { useReducer } from 'react'
import Wheel from './Components/Wheel1'
import TriviaDisplay from './Components/TriviaDisplay'
//import fetchTrivia from './api/fetchTrivia'

function App() {

  const setState = (state, action) => {
    switch (action.type) {
      case 'SPIN_WHEEL':
        return {...state, degree: action.degree};
      case 'SELECT_OPTION':
        return {...state, selectedOption: action.selectedOption};
      case 'TOGGLE_SPIN_DISPLAY':
        return {...state, showResult: !state.showResult};
      case 'SET_QUESTION':
        return {...state, currentQuestion: action.currentQuestion};
      case 'TOGGLE_ANSWER_DISPLAY':
        return {...state, showAnswer: !state.showAnswer};
      case 'USER_GUESSES':
        return {...state, userGuess: action.userGuess};
      case 'CALCULATE_DIFFERENCE':
        return {...state, difference: action.difference}
      default:
        throw new Error('Invalid action type')
    }
  }
  const [state, dispatch] = useReducer(setState, 
    {degree: 0, 
    selectedOption: 1,
    showResult: false,
    currentQuestion: {},
    showAnswer: false,
    userGuess: null,
    difference: null,
  })

  return (
    <div>
      <h1>Wheel of Misfortune</h1>
      <div className="App">
        <TriviaDisplay 
          state={state}
          dispatch={dispatch}
        />
        <Wheel 
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
