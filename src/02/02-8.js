//ES6에서는 참조 순서에 따른 의존성 문제가 해결됨
//import구문을 사용해 script엘리먼트 없이 연결된 파일 및 의존 파일을 모두 받고 코드 구동
import MyModule from './MyModule.js';
import { ModuleName } from './MyModule.js';
import { ModuleName as RenameModuleName } from './Mymodule.js';
function Func() {
  MyModule();
}
export const CONST_VALUE = 0;
export class MyClass {}
export default new Func(); //현재 파일이 다른 파일에서 기본으로 참조하게되는 항목 정의
