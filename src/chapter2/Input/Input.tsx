import { Button, Input as MUIInput } from "@material-ui/core";
import React from "react"

interface IProps {
  secretWord: string;
}

const Input: React.FC<IProps> = (props) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return <div data-test="component-input" style={{ marginBottom: "24px" }}>
    <form>
      <MUIInput 
        data-test="input-box"
        type="text"
        placeholder="Enter guess"
        value={currentGuess}
        onChange={e => setCurrentGuess(e.target.value)}
      />
      <Button 
        data-test="submit-button"
      >
        Submit 
      </Button>
    </form>
  </div>
}

export default Input