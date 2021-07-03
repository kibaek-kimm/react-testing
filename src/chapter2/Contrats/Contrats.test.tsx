import { shallow } from "enzyme";
import Contrats from "./Contrats"
import { findByTestAttr } from "../../../test/testUtils"

const ATTR_WRAPPER = "component-congrats";

const defaultProps = { success: false };

const setup = (props = defaultProps) => {
  return shallow(<Contrats {...props} />)
}

test("render without error", () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, ATTR_WRAPPER);
  expect(component.length).toBe(1)
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, ATTR_WRAPPER);
  expect(component.text()).toBe("");
});

test("renders non-empty contrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
})