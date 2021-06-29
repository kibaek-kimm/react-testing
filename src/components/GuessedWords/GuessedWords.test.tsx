import { shallow } from "enzyme"
import GuessedWords from ".";
import { findByTestAttr } from "../../../test/testUtils";

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
    const component = findByTestAttr(wrapper, "component-guessed-word");
  })
})

describe("if there are words guessed", () => {
  
})