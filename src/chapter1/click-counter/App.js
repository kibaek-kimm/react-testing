import React, {useState} from "react"
import "./App.css"

export default function() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
    </div>
  )
}