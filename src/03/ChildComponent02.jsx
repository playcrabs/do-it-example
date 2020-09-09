import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    //객체 구조 분해 할당식을 사용해 프로퍼티에 전달된 값들을 render() 함수 내의 지역변수로 재정의
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    //객체 프로퍼티의 자료형은 PropsTypes의 Shape를 사용하여 정의
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티
  //PropTypes에 정의된 변수 안의 특수변수 isRequired를 이용하여 requiredStringValue를 필수 프로퍼티로 지정
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
