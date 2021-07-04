import React from "react";
import { shallow } from "enzyme";
import Input from "./Input"
import { findByTestAttr } from "../../../test/testUtils"

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
  test("state update with value of input box upon change", () => {
    const mockSetCurrnetGuess = jest.fn()
    React.useState = jest.fn(() => ["", mockSetCurrnetGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train"} };
    inputBox.simulate("change", mockEvent)

    expect(mockSetCurrnetGuess).toHaveBeenCalledWith("train");
  })
})