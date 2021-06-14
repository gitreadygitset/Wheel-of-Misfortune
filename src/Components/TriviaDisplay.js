import React, { useState } from 'react'
import {fetchTrivia} from '../api/fetchTrivia'

const TriviaDisplay = () => {
  const [currentQuestion, setCurrentQuestion] = useState({})

  const questionify = text => {
    let spaceIndex = text.indexOf(' ');
    let questionString = "What" + text.slice(spaceIndex);
    return questionString;
  }

  const getQuestion = async () => {
    let questionData = await fetchTrivia();
    questionData.text = questionify(questionData.text);
    setCurrentQuestion(questionData)
  }

  return (
    <div>
      <p>{currentQuestion.text}</p>
      {currentQuestion.text ?
      <div>
        <label htmlFor="answer">Answer</label> 
        <input id="answer" type="number"/>
      </div>
      : null }
     
      <button onClick={getQuestion}>Get trivia question</button>
    </div>
  )
}

export default TriviaDisplay
