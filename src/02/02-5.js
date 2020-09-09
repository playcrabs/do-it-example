//(1)기존 함수 선언
function add(first, second) {
  return first + second;
}
// typeof add === 'function'

var add = function add(first, second) {
  return first + second;
};
// typeof add === 'function', 익명함수

//------------------------------------------------------------------------

//(2)화살표 함수
//function키워드를 생략, 인자블록(())과 본문블록({}) 사이에 => 표기
var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second; //본문블록 공백, 결과값 바로 반환
var addMultiple = (first, second) => ({ add: first + second, multiply: first * second }); //반환값 객체일 경우

//화살표 함수의 장점
//1.함수 표현식 간결
//2.계단형 함수 선언 방지

//(3)콜백 함수의 this범위 오류 방지를 위한 bind()함수 이용 this객체 전달
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first + second) => this.value + first + second;
  }
}
