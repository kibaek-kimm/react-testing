import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Contrats from "./Contrats"
import {findByTestAttr} from "../../../test/testUtils"

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Contrats {...props} />)
}

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1)
});

test("renders no text when `success` prop is false", () => {

});

test("renders non-empty contrats message when `success` prop is true", () => {

})