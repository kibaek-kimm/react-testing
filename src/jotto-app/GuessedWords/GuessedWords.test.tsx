import { shallow } from "enzyme"
import GuessedWords from ".";
import { findByTestAttr } from "../../../test/testUtils";
import { IGuessedWords } from "./GuessedWords";

const defaultProps = {
  guessedWords: [{
    guessedWord: "train",
    letterMatchCount: 3
  }]
};
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps} />)
}

describe("if there are no words guessed", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  })

  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  })
})

describe("if there are words guessed", () => {
  let wrapper: any;
  const guessedWords: IGuessedWords[] = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ]
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  })

  test(`renders guess "guessed words" section`, () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  })

  // 유주한 키워드(guessedWords)의 히스토리가 잘 렌더링 되는지 체크
  test(`correct number of guessed words`, () => {
    const guessdWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessdWordsNodes.length).toBe(guessedWords.length);
  })
})