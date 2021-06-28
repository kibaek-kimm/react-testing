# Jotto App 만들기

## Jotto?
Jotto (또는 Giotto)는 두 명의 플레이어, 필기구 및 알파벳이 적힌 종이 조각으로 진행되는 논리 지향 단어 게임입니다. 각 플레이어는 비밀 단어를 쓰고 다른 플레이어의 단어를 추측합니다.
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