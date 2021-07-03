import { Typography } from "@material-ui/core";

interface IContrats {
  success: boolean;
}

/**
 * Receive the success state as a props
 * @param param0 
 * @returns 
 */
const Contrats: React.FC<IContrats> = ({ success }) => {
  if (success) {
    return <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message">
        <Typography variant="h5">Contratsulations! You guessed the word!</Typography>
      </span>
  </div>
  }

  return <div data-test="component-congrats"/>
}

export default Contrats;