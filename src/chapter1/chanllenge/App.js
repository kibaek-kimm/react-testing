import React, {useCallback, useState} from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0);
  const [showErrorMsg, setShowErrorMsg] = useState();

  const handleIncrement = () => {
    setShowErrorMsg(false);
    setCount(count + 1)
  };

  const handleDecrement = useCallback(() => {
    if (count === 0) {
      setShowErrorMsg(true);
      return;
    }

    setShowErrorMsg(false);
    setCount(count - 1)
  }, [count])

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>
      <div data-test="error-msg" style={{ height: "40px", color: "red" }}>{showErrorMsg && "the counter can't go below zero"}</div>
      
      <div style={{ display: "flex"}}>
      <button
        data-test="decrement-button"
        onClick={handleDecrement}
      >
        Decrement counter
      </button>
      <button
        data-test="increment-button"
        onClick={handleIncrement}
      >
        Increment counter
      </button>

      </div>
    </div>
  )
}