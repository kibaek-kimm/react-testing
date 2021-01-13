# _React Testing with Jest and Enzyme_ from Udemy

## Types of Tests
### Unit tests
* 가장 작은 단위의 테스트이고 한개의 기능(or 컴포넌트)만을 테스트함

### Integration tests
* unit test들을 통합하여 테스트하는 방식

### Acceptance / End-to-end(E2E) Tests
* 실제 유저가 동작하는 시나리오를 구성하여 테스트함
* 셀레니움과 같은 가상 브라우저에서 동작된다.

## Counter앱을 예시로 behavior, implementation testing 설명
### behavior tests
1. state 초기화(0)
2. button 클릭 구현
3. **증가된 1값이 렌터링 되었는지 확인**

### implementation tests
1. state 초기화(0)
2. button 클릭 구현
3. **`increment()`가 호출 되었는지 확인**

### behavior, not implementation
* 테스트코드가 실제코드 이름에 의존성이 생겨 테스트가 깨질수 있고 유지보수가 어려워짐
* 하지만 절대적으로 `implementation`를 사용하지 않는것이 아니라 두 방식의 밸런스가 중요함
* Art, not Science

## 유의사항
* 테스트 코드는 유지보수가 쉬워야한다.
* 효율적으로 파악할수 있도록 실패케이스를 잘 구성해야한다.

## Study history
* test를 위한 attrbute를 production에서 제거하는 방법은 `babel-plugin-react-remove-properties` 바벨 플러그인을 사용하면 된다.