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
    return <div data-test="component-congrats">
      <span data-test="congrats-message">
        Contratsulations! You guessed the word!
      </span>
  </div>
  }

  return <div data-test="component-congrats"/>
}

export default Contrats;