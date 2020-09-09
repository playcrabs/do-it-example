//문자열형 프로퍼티를 가지는 컴포넌트를 생성
import React from 'react';
import PropsTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//자료형을 선언하는 예제
//PropsComponent의 prototype라는 특수변수를 사용해 자료형 선언
PropsComponent.propTypes = {
  //프로퍼티의 자료형을 객체형태로 지정해 PropsComponent.prototype에 저장
  name: PropsTypes.string,
};

export default PropsComponent;
