import { Typography } from "@material-ui/core";
// import { MDCDataTable } from '@material/data-table';

export interface IGuessedWords {
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
      <Typography variant="h6" gutterBottom data-test="guess-instructions">
        Try to guess the secret word!
      </Typography>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr className="mdc-data-table__row" key={index} data-test="guessed-word">
        <td className="mdc-data-table__cell">{word.guessedWord}</td>
        <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <div className="mdc-data-table__table-container">
          <table className="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
              <tr className="mdc-data-table__header-row">
                <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Guess</th>
                <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              { guessedWordsRows }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-word">
      { contents }
    </div>
  )
}

export default GuessedWords