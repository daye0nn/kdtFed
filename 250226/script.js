// 배열관련 예제
// concat()
// slice()
// splice()

// filter VS find
// 1) filter의 경우, 반환값을 배열형태의 자료구조로 가져오는 반면, find의 경우, 반환값을 문자열로 반환
// 2) filter의 경우, 반환값이 존재하지 않는 경우, 빈배열로 반환하는 반면, find의 경우, undefined로 값을 반환
// 3) filter의 경우, 복수값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에 해당 조건에 부합하는 값들을 모두 찾아옵니다. 반면, find의 경우, 명확하게 1개의 단일 값을 찾아오고자 하는 목적을 가지고 있기 때문에 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료!!

// reduce()
// 누산기 : 누적 계산기

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers01.reduce((total, current) => total + current, 0);

console.log(result01);
