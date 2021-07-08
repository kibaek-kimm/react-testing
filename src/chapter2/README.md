# Jotto App 만들기
* Jotto앱을 완전한 TDD로 개발해보기

## Jotto?
"Jotto (또는 Giotto)는 두 명의 플레이어, 필기구 및 알파벳이 적힌 종이 조각으로 진행되는 논리 지향 단어 게임입니다. 각 플레이어는 비밀 단어를 쓰고 다른 플레이어의 단어를 추측합니다."
출저: 위키백과

## Scenario
* 랜덤한 단어를 api를 통해 조회 (https://random-word-api.herokuapp.com/word)
* 단어를 검색하기 위한 input과 button
* 검색한 단어의 히스토리
** 단어 - 매칭된 단어의 개수
* 20회 안에 맞추지 못하면 실패 문구 노출
* 20회 안에 맞췄다면 성공 문구 노출

## Components
### Contrats 컴포넌트
* success 여부에 따라 축하 메세지를 노출한다.

### GuessedWords
* 추측한 단어들의 정보를 테이플 형태로 노출한다.

### Input
* 단어를 입력하는 폼.

## setupTests.js
테스트 실행 전 테스트환경을 세팅할 수 있도록 호출하는 파일. 

## 쉬었다 가기
### 테스트를 해보며 현재까지 느낀점
#### 보다 효일적인 코딩이 가능(Coding more effciently)
- 테스트코드를 작성하기 위해 작업하기 전에 먼저 계획을 짜게 된다. (planning ahead of time)
- 삽질하는시간 감소 (fewer false starts)

#### 수동으로 하던 테스트가 없어짐
- 자동으로 테스트가 동작하니 사이드 이펙트 감소(회귀테스트)
- 이유모를 불안감으로 인한 스트레스 해소

#### 코드가 좋아짐
- 체계적으로 코드작성 가능(Well planned)
- 유지보수가 쉬워짐(Easier to maintain)
- 버그가 감소함(Fewer bugs)


## beforeEach
- `describe`내에 정의 된 모든`test`함수가 실행되기 전에 실행되는 함수이다.
- 매 테스트마다 반복적으로 사용되는 코드들을 구현할때 유용하다.

## afterEach
- 이름 그대로 beforeEach의 반대함수
- 다음 테스트를 위해 앞 테스트에서 mocking한 변수들을 다시 초기화할때 유용하다.


## Mocks
* 실제 코드를 실핼하지 않도록 동일한 입력과 출력의 임의코드
* 테스트에 Mock을 사용하는 이유는
  * 테스트 실행 시 불필요한 network call을 방지하고 side-effect를 미연에 방지할 수 있다. (Prevent side-effect like networek calls)
  * 함수를 실행하는 시점을 명확하게 알수있다. (Spy on function to see when it's called)
  * 값을 반환하므로 테스트를 명확하게 할 수 있다.

### jest.fn
* Jest객체의 `fn`함수를 이용하여 mock 함수를 구현한다.
* 테스트에서 내부의 로직보다는 반환값이 중요하기 때문에 완전히 배제하고 결과값만을 반환한다.
* 예제에서는 React의 useState, ChangeEvent객체를 mock으로 구현한다.
* 아래는 React.useState를 mocking하여 input변경시 onChange이벤트를 통해 정상적으로 state에 변경이 되는지에 대한 테스트이다.
```javascript
test("useState", () => {
  const mockSetCurrnetGuess = jest.fn()
  React.useState = jest.fn(() => ["", mockSetCurrnetGuess]);

  const wrapper = setup();
  const inputBox = findByTestAttr(wrapper, "input-box");

  const mockEvent = { target: { value: "train"} };
  inputBox.simulate("change", mockEvent);

  expect(mockSetCurrnetGuess).toHaveBeenCalledWith("train");
})
```

### jest.mock
* 만일 실제 코드에서 React.useState가 아니라 구조분해할당을 통해 useState만 사용한다면 mock이 정상적으로 되지않아 에러가 발생한다.
* `jest.mock`메소드를 이용해 `React.useState`가 아니라 react 실제 모듈에 mock을 적용할 수 있다.

```javascript
// Override useState
const mockSetCurrnetGuess = jest.fn()
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrnetGuess]
}))

test("useState", () => {
  const wrapper = setup();
  const inputBox = findByTestAttr(wrapper, "input-box");

  const mockEvent = { target: { value: "train"} };
  inputBox.simulate("change", mockEvent);

  expect(mockSetCurrnetGuess).toHaveBeenCalledWith("train");
})
```

## Quiz - Clearing State
* setCurrentGuess state setter 함수호출 테스트 (Write tests that setCurrentGuess gets called)
  * 버튼을 클릭하면 state가 초기화됨 (with an empty string when submtit button is clicked)
* 앞서 작성한 테스트와 유사함(Simliar to what we did with setCurrentGuess with input box earlier)
* "state controlled input field" describe에 test 구현(Include this tests in the "state controlled input field" describe)
* 테스트코드 작성 후 실제코드 작성(After writing the tests, write code to make the tests pass)
  * button의 onClick속성 활용(onClick attribute function for submit button)
* Write TODO comments
  * Update `guessWords` global state
  * Check against secretWord and optionally update `success` global state