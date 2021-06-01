import React, { useState, useReducer } from 'react'

const Wheel = () => {
  const [degree, setDegree] = useState(0)
  
  const setSelectedOption = (selectedOption, action) => {
    switch (action.type) {
      case 'SPIN_WHEEL':
        const numSlices = ((action.degree % 360)/45)
        return numSlices;
    }
  }

  const [selectedOption, dispatch] = useReducer(setSelectedOption, degree)

  const spinWheel = () => {
    const newDeg = Math.floor(Math.random() * (7000-1024)) + 1024;
    console.log(`Option ${selectedOption}`);
    document.getElementById('box').style.transform = `rotate(${newDeg}deg)`;
    console.log(newDeg)
    setDegree((newDeg % 360) + degree)
    dispatch({type: 'SPIN_WHEEL', degree: newDeg})
  }

 
  return (
    <div id="wheel">
      <div id="mainbox" className="mainbox">
        <div id="arrow"><p>&lt;</p></div>
        <div id="box" className="box">
          <div className="box1">
            <span className="span1"><b>Option 1</b></span>
            <span className="span2"><b>Option 2</b></span>
            <span className="span3"><b>Option 3</b></span>
            <span className="span4"><b>Option 4</b></span>
          </div>
          <div className="box2">
            <span className="span1"><b>Option 5</b></span>
            <span className="span2"><b>Option 6</b></span>
            <span className="span3"><b>Option 7</b></span>
            <span className="span4"><b>Option 8</b></span>
          </div>
        </div>
      </div>
      <button className="spin" onClick={spinWheel}>Spin</button>
      <p>{`Option ${selectedOption}`}</p>
      <p>{degree}</p>
    </div>
  )
}
export default Wheel
