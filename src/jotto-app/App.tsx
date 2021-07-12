import Contrats from "./Contrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input"

export default function JottoApp() {
  return (
    <div className="App" data-test="component-app">
      <Input />
      <Contrats success={true}/>
      <GuessedWords guessedWords={[{ guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }]} />
    </div>
  )
}