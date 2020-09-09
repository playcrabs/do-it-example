//(1)기존 자바스크립트의 객체확장 표현식
var x = 0;
var y = 0;
var obj = { x: x, y: y }; //대입 객체의 키 이름과 값 동일
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; //연산결과 키 값 대입시, 키값 지정 코드 추가 작성
//객체에 함수 추가시, 변수를 함수에 할당
var obj2 = {
  x: x,
  mathodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};

//---------------------------------------------------------

//(2)ES6의 객체 확장 표현식
var x = 0;
var y = 0;
var obj = { x, y }; //객체 변수 선언시, 키값을 생략시 키이름으로 자동지정
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
  //객체 생성블록안에 대괄호 안에 표현식 작성시, 추가해 계산된 키값 생성
};
var obj2 = {
  x,
  //function키워드 생략해 람수 선언 가능
  mathodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

//---------------------------------------------------------

//(3)기존 구조 분해 사용 방법
var list = [0, 1];
var items1 = list[0]; //배열의 인덱스를 변수에 할당
var items2 = list[1];
var items3 = list[2] || -1; // ||연산자로 기본값으로 할당
var temp = item2; //배열의 두 값 치환
item2 = item1;
item1 = temp;
var obj = { key1: 'one', key2: 'two' };
var key1 = obj.key1; //객체의 키값을 변수에 할당
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = obj.key1; //객체의 키값을 다른 변수에 할당

//---------------------------------------------------------

//(4)ES6 구조 분해와 구조 할당
var list = [0, 1];
var [item1, item2, item3 = -1] = list; //대괄호 사이에 추출하려는 인덱스위치에 변수 배치, =로 기본값 할당
[item2, item1] = [item1, item2]; //인덱스 위치에 각각 변경할 변수를 교차 배치해 두 값 치환
var obj = { key1: 'one', key2: 'two' };
var { key1: newKey1, key2, key3 = 'default key3 value' } = obj; //:으로 새 변수명 선언해 추출된 키값을 다른 변수명으로 할당

var [item1, ...otherItems] = [0, 1, 2]; //구조 할당 표현식을 이용해 배열에서 첫 위치의 인덱스값을 추출하고 나머지는 전개연산자로 할당
var { key1, ...otherItems } = { key1: 'one', key2: 'two' }; //객체의 key1 키값을 추출하고 나머지 키값을 포함 새 객체를 other에 할당
// otherItems = [1,2]
// others = {key2:'two'}
