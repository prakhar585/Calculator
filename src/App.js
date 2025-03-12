import "./App.css";
import React, { useState } from "react";

function App() {
  const [display, setDisplay ] = useState('');
  const [answer, setAnswer] = useState('');

  const handleNumberClick=(num)=>{
    setDisplay((prevValue)=>prevValue+num);
  }
  const handleOperatorClick=(operator)=>{
    setDisplay((prevValue)=>prevValue+operator);
  }

  const handleEqualsClick=()=>{
    const handleEqualsClick = () => {
      try {
        if (display.trim() === '' || /[+\-*/]$/.test(display)) {
          setAnswer('Error');
          return;
        }
    
        let ans = eval(display);
    
        // Handle division by zero cases
        if (ans === Infinity) {
          setAnswer('Infinity');
        } else if (isNaN(ans)) {
          setAnswer('NaN');
        } else {
          setAnswer(ans.toString()); // Ensure answer is displayed correctly
        }
      } catch (error) {
        setAnswer('Error'); // Catch any other unexpected errors
      }
    };
    
  } 

  const handleClearClick=()=>{
    setDisplay('');
    setAnswer('');
  }

  return (
    <div className="calculator">
      <div>
        <h1 className="heading">React Calculator</h1>
        <input className="solution" readOnly value={display}></input>
        <br></br>

        {answer && <h3 className="heading">{answer}</h3>}
        <div className="calc-body">
          <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          {/* second row */}
          <div className="row">
          <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          {/* third row */}
          <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          {/* 4th row */}
          <div className="row">
          <button onClick={() => handleClearClick()}>C</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleEqualsClick()}>=</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
