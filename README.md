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

