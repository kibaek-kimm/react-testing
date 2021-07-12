/**
 * @param guessedWord 
 * @param secretWord 
 */
export function getLetterMatchCount(guessedWord: string, secretWord: string) {
  const secretLetters = secretWord.split("");
  const guessedLetterSet = new Set(guessedWord);

  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}