import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    //객체 구조 분해 할당식을 사용해 프로퍼티에 전달된 값들을 render() 함수 내의 지역변수로 재정의
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {String(objValue)}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
    );
  }
}

//객체 형태로 프로퍼티의 자료형을 정의함
ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.array,
  objValue: PropTypes.bool,
  nodeValue: PropTypes.number,
  funcValue: PropTypes.func,
};

export default ChildComponent;
