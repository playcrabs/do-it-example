//(1)ES6 가변 변수 - let
//let으로 선언한 변수는 읽기와 수정 가능함

let num = 1;
num = num * 3;

//(2)ES6 불변 변수 - const
//const로 선언한 변수는 읽기만 가능

const num = 1;
num = 3; //오류 발생

//값 다시 할당 불가, 내장함수를 이용한 변경은 가능(무결성 제약 조건)

const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
arr2.pop();

//무결성을 유지하면서 불변 변수의 값을 수정해야 하는 경우
// -> 수정할 불변 변수를 새로 만들어 새값을 할당

const num1 = 1;
const num2 = num1 * 3;

// 가변 내장 함수                  무결성 내장 함수
//  push(items)                 concat(...items)
//  splice(s,c,...items)        slice(0,s) .concat(...items, slice(s+c))
//  pop()                       slice(0,len-1)
//  shift()                     slice(1)

//불변 변수 사용시 장점
//1.무결성 제약 규칙에 의해 변수가 변하는 시점을 쉽게 파악
//2.수정 전후의 변수값 비교 가능
