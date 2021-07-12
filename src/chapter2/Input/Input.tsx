import { Box, Button, Input as MUIInput } from "@material-ui/core";
import React, { useState } from "react"

interface IProps {
  success: boolean;
  secretWord: string;
}

const Input: React.FC<IProps> = ({ success }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  if (success) {
    return <div data-test="component-input" style={{ marginBottom: "24px" }} />
  }
  return <div data-test="component-input" style={{ marginBottom: "24px" }}>
    <form>
      <Box display="flex" justifyContent="center" mb={4}>
        <MUIInput 
          data-test="input-box"
          type="text"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <Box ml={3}>
          <Button 
            variant="contained"
            data-test="submit-button"
            onClick={(e) => {
              // TODO: Update guessWords global state
              // TODO: Check against secretWord and optionally update success global state
              e.preventDefault()
              setCurrentGuess("")
            }}
          >
            Submit 
          </Button>
        </Box>
      </Box>
      
    </form>
  </div>
}

export default Input