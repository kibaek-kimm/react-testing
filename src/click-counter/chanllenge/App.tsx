import { Box, Button, Typography } from "@material-ui/core";
import React, {useCallback, useState} from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>();

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
      <Typography variant="body1" data-test="error-msg" style={{ height: "40px", color: "red" }}>
        {showErrorMsg && "the counter can't go below zero"}
      </Typography>
      
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Box mr={1}>
          <Button 
            color="primary"
            variant="contained"
            data-test="decrement-button"
            onClick={handleDecrement}
          >
            Decrement counter
          </Button>
        </Box>
        <Box ml={1}>
          <Button 
            color="primary"
            variant="contained"
            data-test="increment-button"
            onClick={handleIncrement}
          >
            Increment counter
          </Button>
        </Box>
      </div>
    </div>
  )
}