import React from "react"
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  
  // 디버깅을 목적으로 렌더링된 소스코드를 반환한다.
  // console.log(wrapper.debug());
});
