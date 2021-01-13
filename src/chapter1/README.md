# Chapter1
수업은 Counter 리액트 앱을 기반으로 진행된다.

## Enzyme 셋업
* 테스트를 구동하는(Test runner) jest와 Enzyme을 연동하기 위해 `jest-enzyme` 설치
* 테스트를 구동하는(Test runner) jest와 Enzyme을 연동하기 위해 `jest-enzyme` 설치

```bash
yarn add --dev enzyme 
               jest-enzyme 
               enzyme-adapter-react-16
```

## Enzyme으로 베이스 테스트코드 작성
* 테스트를 구동하는(Test runner) jest와 Enzyme을 연동하기 위해 `jest-enzyme` 설치
Enzyme 실행 전 
* 아래 코드에는 없지만 같은 방법으로 button, count-display도 render check 추가
```javascript
import React from "react"
import App from "./App"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new EnzymeAdapter() })

// ...Test suites code
```

## data-test 커스텀 attribute를 이용한 렌더링 체크
*App.js*
```javascript
import React, {useState} from "react"
import "./App.css"

export default function() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app" className="App">
    </div>
  )
}
```
*App.test.js*
```javascript
test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
```
