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
### Input
* 단어를 입력하는 폼.

### GuessedWords
* 추측한 단어들의 정보를 테이플 형태로 노출한다.

### Contrats 컴포넌트
* success 여부에 따라 결과를 노출한다.

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