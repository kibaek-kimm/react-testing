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