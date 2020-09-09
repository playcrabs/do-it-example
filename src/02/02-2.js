//(1)기존 템플릿 문자열
//병합 연산자를 사용한 문자열 연결
var string1 = 'hi';
var string2 = 'hello';
var greeting = string1 + '' + string2;

console.log(greeting);

//병합 연산자를 사용한 문자열과 변수 연결
var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + '입니다.';

console.log(message);

//줄바꿈은 \n으로
var multiLine = '문자열1\n문자열2';

console.log(multiLine);

//연산결과를 괄호로 묶어 연산구문을 선실행
var value1 = 1;
var value2 = 2;
var booValue = false;
var operator1 = '곱셈값은' + value1 * value2 + '입니다.';
var operator2 = '불리언값은' + (booValue ? '참' : '거짓') + '입니다.\n';

console.log(operator1);
console.log(operator2);

//------------------------------------------------------------------------

//(2)ES6 템플릿 문자열
//''대신 ``, 병합연산자 대신에 ${} 사용
var greeting = `${string1}${string2}`;

console.log(greeting);

//------------------------------------------------------------------------

//(3)예시문제
var cart = { name: '도서', price: 1500 };
var getTotal = function (cart) {
  return `${cart.price}원`;
};
var myCart = `장바구니에 ${cart.name}가 있습니다.\n총 금액은 ${getTotal(cart)}입니다.`;

console.log(myCart);
