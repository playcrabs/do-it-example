//(1)기존 클래스 표현방법
//함수를 생성자 형태로 선언 후, 상속이 필요한 변수나 함수를 prototype객체에 할당
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

//static 함수 선언
Shape.create = function (x, y) {
  return new Shape(x, y);
};

//인스턴스 함수 선언
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};

//(2)ES6 클래스 표현방법
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = 'shape';
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
s.area;
