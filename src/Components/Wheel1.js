import React, { useReducer } from 'react'
import '../styles/Wheel.css'

const Wheel = () => {
  
  const setWheelState = (wheelState, action) => {
    switch (action.type) {
      case 'SPIN_WHEEL':
        return {...wheelState, degree: action.degree};
      case 'SELECT_OPTION':
        return {...wheelState, selectedOption: action.selectedOption};
      case 'TOGGLE_DISPLAY':
        return {...wheelState, showResult: !wheelState.showResult}
      default:
        throw new Error('Invalid action type')
    }
  }
  const [wheelState, dispatch] = useReducer(setWheelState, 
    {degree: 0, 
    selectedOption: 1,
    showResult: false
  })

  const spinWheel = () => {
    if(wheelState.showResult){
      dispatch({type: 'TOGGLE_DISPLAY'})
    }
    const newDeg = Math.floor(Math.random() * (7000-1024)) + 1024;
    document.getElementById('box').style.transform = `rotate(${newDeg}deg)`
    setTimeout(()=>{
      dispatch({type: 'TOGGLE_DISPLAY'})
    }, 5700)
    const degModulo = newDeg % 360;
    dispatch({type: 'SPIN_WHEEL', degree: degModulo})
    setSelectedOption(degModulo)
  }

  const setSelectedOption = (degree) => {
    let selectedOption
    if(degree <= 23 || degree > 337){
      selectedOption = 1;
    }else if(degree > 293){
      selectedOption = 8;
    } else if(degree > 248){
      selectedOption = 7;
    } else if(degree > 203){
      selectedOption = 6;
    } else if(degree > 158){
      selectedOption = 5;
    } else if(degree > 113){
      selectedOption = 4;
    } else if(degree > 68){
      selectedOption = 3;
    } else if(degree > 23){
      selectedOption = 2;
    } else {
      throw new Error("Invalid degree provided")
    }
    dispatch({type: 'SELECT_OPTION', selectedOption: selectedOption})
  }

  return (
    <div id="wheel">
      <div id="mainbox" className="mainbox">
        <div id="arrow"><p>&lt;</p></div>
        <div id="box" className="box">
          <div className="box1">
            <span className="span1"><b>Option 5</b></span>
            <span className="span2"><b>Option 1</b></span>
            <span className="span3"><b>Option 7</b></span>
            <span className="span4"><b>Option 3</b></span>
          </div>
          <div className="box2">
            <span className="span1"><b>Option 8</b></span>
            <span className="span2"><b>Option 4</b></span>
            <span className="span3"><b>Option 2</b></span>
            <span className="span4"><b>Option 6</b></span>
          </div>
        </div>
      </div>
      <div id="spin">
        <button className="spin" onClick={spinWheel}>Spin</button>
        {wheelState.showResult ? <p>Option {wheelState.selectedOption}</p> 
        : null}
      </div>
    </div>
  )
}
export default Wheel
