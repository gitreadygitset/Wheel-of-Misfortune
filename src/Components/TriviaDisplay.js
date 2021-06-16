import React, { useState, useEffect } from 'react'
import {fetchTrivia} from '../api/fetchTrivia'
import '../styles/Trivia.css'

const TriviaDisplay = ({state, dispatch}) => {
  
  const questionify = text => {
    let spaceIndex = text.indexOf(' ');
    let questionString = "What" + text.slice(spaceIndex, -1) + "?";
    return questionString;
  }

  const getQuestion = async () => {
    let questionData = await fetchTrivia();
    document.getElementById('submit').disabled = false;
    questionData.text = questionify(questionData.text);
    dispatch({type: 'SET_QUESTION', currentQuestion: questionData})
    dispatch({type: 'TOGGLE_ANSWER_DISPLAY'})
    dispatch({type: 'USER_GUESSES', userGuess: null});
  }

  const submitAnswer = (event) => {
    event.preventDefault();
    document.getElementById('submit').disabled = true;
    let userAnswer = document.getElementById('answer').value
    document.getElementById('answer').value = null;
    dispatch({type: 'CALCULATE_DIFFERENCE', difference: (Math.abs(userAnswer - state.currentQuestion.number))});
    dispatch({type: 'USER_GUESSES', userGuess: userAnswer})
    dispatch({type: 'TOGGLE_ANSWER_DISPLAY'})
  }

  useEffect(() => {
    fetchTrivia()
    .then(questionData => {
      questionData.text = questionify(questionData.text);
      dispatch({type: 'SET_QUESTION', currentQuestion: questionData})
    })
  }, []
  )
  return (
    <div id="trivia-display">
      <div>
        <p>{state.currentQuestion.text}</p>
      </div>
      {state.currentQuestion.text ?
      <div>
        <form onSubmit={submitAnswer}>
          <label htmlFor="answer">Enter your answer</label> 
          <input id="answer" type="number"/>
          <input id="submit" type="submit"/>
        </form>
      </div>
      : null }
      <div>
        {state.showAnswer ? 
        <p>You entered {state.userGuess}. The correct answer is {state.currentQuestion.number}. That's a difference of {state.difference}. {state.selectedOption}</p> 
        : null }
      </div>
      <button onClick={getQuestion}>Next question</button>
    </div>
  )
}

export default TriviaDisplay
