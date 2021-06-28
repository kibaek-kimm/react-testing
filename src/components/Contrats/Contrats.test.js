import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Contrats from "./Contrats"
import {findByTestAttr} from "../../../test/testUtils"

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Contrats {...props} />)
}

const getComponent = (props = {}) => {
  const wrapper = setup(props);
  return findByTestAttr(wrapper, "component-congrats");
}

test("render without error", () => {
  const component = getComponent();
  expect(component.length).toBe(1)
});

test("renders no text when `success` prop is false", () => {
  const component = getComponent({ setup: false });
  expect(component.text()).toBe("");
});

test("renders non-empty contrats message when `success` prop is true", () => {
  
})