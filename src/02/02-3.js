//(1)기존 전개 연산자
var array1 = ['one', 'two'];
var array1 = ['three', 'four'];

//새로운 배열 생성
var combined = [array1[0], array1[1], array2[0], array2[1]];

//concat() 함수로 배열 병합
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);

//배열요소 인덱스로 추출
var first = array1[0];
var second = array1[1];
//||연산자와 조합하면 추출할 배열 요소가 없을때 기본값 지정
var three = array1[2] || 'empty';

function func() {
  //특수변수를 이용해 함수 내 인자 항목들을 배열로 변환
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  //인덱스 범위에 해당하는 배열요소 추출
  var others = args.slice(1, args.length);
}

//------------------------------------------------------------------------

//(2)ES6 전개 연산자
const combined = [...array1, ...array2];
const [first, second, three = 'empty', ...others] = array1;

//함수 인자 배열을 args 변수에 할당
//func(...args) { var [first, ...others]=args; }

//------------------------------------------------------------------------

//(3)기존 객체 전개 연산자
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  //키에 해당하는 값 추출
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

//assign()으로 객체 병합 (첫번째인자는 결과로 반환할 객체, 나머지는 병합할 객체)
var combined = Object.assign({}, objectOne, objectTwo);
//combined = {one:1, two:2, three:3, four:4, other:-1}
var combined = Object.assign({}, objectTwo, objectOne);
//combined = {one:1, two:2, three:3, four:4, other:0} <<중복일 경우, 이후에 전달된 객체 값으로 덮어씀
var others = Object.assign({}, combined);

//삭제 연산자를 이용해 특정 데이터 추출 후 새로운 객체 생성
delete others.other;

//------------------------------------------------------------------------

//(4)ES6 전개 연산자
var combined = {
  ...objectOne,
  ...objectTwo,
};
//combined = {one:1, two:2, three:3, four:4, other:-1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
//combined = {one:1, two:2, three:3, four:4, other:0} <<중복일 경우, 이후에 전달된 객체 값으로 덮어씀

//객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개연산자 선언변수(others)에 할당 가능
var { other, ...others } = combined;
//others = {one:1, two:2, three:3, four:4}
