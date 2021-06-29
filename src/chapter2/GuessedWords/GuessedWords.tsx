interface IGuessedWords {
  guessedWord: string;
  letterMatchCount: number;
}

interface IProps {
  guessedWords: IGuessedWords[];
}

const GuessedWords: React.FC<IProps> = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  }
  return (
    <div data-test="component-guessed-word">
      { contents }
    </div>
  )
}

export default GuessedWords