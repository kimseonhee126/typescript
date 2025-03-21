/*
any
특정 변수의 타입을 확실히 모를 때
*/

let anyVar: any = 10;

anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;

// any 타입은 어느 변수에든지 값을 할당할 수 있다
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입은 이미 선언된 변수에 값을 할당할 수 없다
// num = unknownVar;

if (typeof unknownVar === 'number') {
    num = unknownVar;
};
