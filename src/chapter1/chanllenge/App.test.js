import React from "react"
import App from "./App"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the App component.
 * 
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<App />)

 const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

 test("render App", () => {
  const wrapper = setup();
  const AppComponent = findByTestAttr(wrapper, "component-app")
  expect(AppComponent.length).toBe(1);
 })

 test("decrement 버튼을 클릭하면 count가 1씩 감소", () => {
  const wrapper = setup();
  const IncrementButton = findByTestAttr(wrapper, "increment-button");
  const DecrementButton = findByTestAttr(wrapper, "decrement-button");

  IncrementButton.simulate("click");
  IncrementButton.simulate("click");
  DecrementButton.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();

  expect(count).toBe("1")
 });

 test("count가 0일때 decrement 버튼을 클릭하면 에러메세지 노출", () => {
  const wrapper = setup();
  const IncrementButton = findByTestAttr(wrapper, "increment-button");
  const DecrementButton = findByTestAttr(wrapper, "decrement-button");

  IncrementButton.simulate("click");
  DecrementButton.simulate("click");
  DecrementButton.simulate("click");

  const errorMsg = findByTestAttr(wrapper, "error-msg").text();

  expect(errorMsg).toBe("the counter can't go below zero")
  // IncrementButton.simulate("click");
  // expect(errorMsg).toBe("")
 });
 