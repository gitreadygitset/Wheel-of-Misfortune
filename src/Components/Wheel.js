import React from 'react'

const Wheel = () => {
  const spinWheel = () => {
    const deg = Math.floor(Math.random() * (9999-1024)) + 1024;
    debugger
    document.getElementById('box').style.transform = `rotate(${deg}deg)`
  }

  return (
    <div id="wheel">
      <div id="mainbox" className="mainbox">
        <div id="box" className="box">
          <div className="box1">
            <span className="span1">Option 1</span>
            <span className="span2">Option 2</span>
            <span className="span3">Option 3</span>
            <span className="span4">Option 4</span>
          </div>
          <div className="box2">
            <span className="span1">Option 5</span>
            <span className="span2">Option 6</span>
            <span className="span3">Option 7</span>
            <span className="span4">Option 8</span>
          </div>
        </div>
      </div>
      <button className="spin" onClick={spinWheel}>Spin</button>
    </div>
  )
}
export default Wheel
