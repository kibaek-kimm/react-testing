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

## Challenge
* 복붙은 자제하고 직접 타이핑하기
* 직접 코드를 작성하기 전 테스트 플래닝부터 하기
### 1. Decrement Button
* "Decrement Counter" 버튼 생성하기
* 클릭하면 counter가 감소됨

### 2. No count below zero
* 0 이하로는 내려갈 수 없음
* 0일때 클릭한다면 에러메세지 노출 "the counter can't go below zero"
* Increment Button을 클릭하면 에러는 사라짐

## 겪은 문제
* count값을 가져올때 일반 변수처럼 위에 선언했다.
* 테스트코드는 순차적으로 실행되기 때문에 정확한 시점에 정의해야한다.

<as-is>

```javascript
const wrapper = setup();
const IncrementButton = findByTestAttr(wrapper, "increment-button");
const DecrementButton = findByTestAttr(wrapper, "decrement-button");
const count = findByTestAttr(wrapper, "count").text();

IncrementButton.simulate("click");
IncrementButton.simulate("click");
DecrementButton.simulate("click");


expect(count).toBe("1")
```

<to-be>

```javascript
const wrapper = setup();
const IncrementButton = findByTestAttr(wrapper, "increment-button");
const DecrementButton = findByTestAttr(wrapper, "decrement-button");

IncrementButton.simulate("click");
IncrementButton.simulate("click");
DecrementButton.simulate("click");

const count = findByTestAttr(wrapper, "count").text();

expect(count).toBe("1")
```