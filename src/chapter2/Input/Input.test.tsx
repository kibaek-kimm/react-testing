import React from "react";
import { shallow } from "enzyme";
import Input from "./Input"
import { findByTestAttr } from "../../../test/testUtils"

const mockSetCurrnetGuess = jest.fn()
jest.mock("react", () => ({
  ...jest.requireActual<React>("react"),
  useState: (initialState: any) => [initialState, mockSetCurrnetGuess]
}))

const DEFAULT_PROPS = {};
const setup = (props = DEFAULT_PROPS) => shallow(<Input {...props} />)

describe("Input component", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup();
  })

  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  })
})

describe("state controlled input field", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup();
  })
  test("state update with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train"} };
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrnetGuess).toHaveBeenCalledWith("train");
  })

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { 
      preventDefault: () => {} 
    })

    expect(mockSetCurrnetGuess).toHaveBeenLastCalledWith("");
  })
})