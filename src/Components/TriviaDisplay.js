import React, { useState, useEffect } from 'react'
import {fetchTrivia} from '../api/fetchTrivia'
import '../styles/Trivia.css'

const TriviaDisplay = () => {
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [difference, setDifference] = useState (null)
  const [userGuess, setUserGuess] = useState (null)

  const questionify = text => {
    let spaceIndex = text.indexOf(' ');
    let questionString = "What" + text.slice(spaceIndex, -1) + "?";
    return questionString;
  }

  const getQuestion = async () => {
    let questionData = await fetchTrivia();
    questionData.text = questionify(questionData.text);
    setCurrentQuestion(questionData)
  }

  const submitAnswer = (event) => {
    event.preventDefault();
    document.getElementById('submit').disabled = true;
    setShowAnswer(true);
    let userAnswer = document.getElementById('answer').value
    document.getElementById('answer').value = null;
    setDifference(Math.abs(userAnswer - currentQuestion.number));
    setUserGuess(userAnswer)
    setShowAnswer(true);
  }

  useEffect(()=> {
    fetchTrivia()
    .then(questionData=> {
      questionData.text = questionify(questionData.text);
      setCurrentQuestion(questionData)
    })
    }
    ,[]
  )
  return (
    <div id="trivia-display">
      <div>
        <p>{currentQuestion.text}</p>
      </div>
      {currentQuestion.text ?
      <div>
        <form onSubmit={submitAnswer}>
          <label htmlFor="answer">Enter your answer</label> 
          <input id="answer" type="number"/>
          <input id="submit" type="submit"/>
        </form>
      </div>
      : null }
      <div>
        {showAnswer ? 
        <p>You entered {userGuess}. The correct answer is {currentQuestion.number}. That's a difference of {difference}.</p> 
        : null }
      </div>
      <button onClick={getQuestion}>Next question</button>
    </div>
  )
}

export default TriviaDisplay
