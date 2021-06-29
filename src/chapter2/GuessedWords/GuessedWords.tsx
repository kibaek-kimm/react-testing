interface IGuessedWords {
  guessedWord: string;
  letterMatchCount: number;
}

interface IProps {
  guessedWords: IGuessedWords[];
}

const GuessedWords: React.FC<IProps> = (props) => {
  return <div data-test="component-guessed-word"/>
}

export default GuessedWords