let unknownValue: unknown;
let anyValue: any;
let undefinedValue: undefined;

// 다운 캐스팅 받아도 해도 오류가 발생하지 않는다
anyValue = unknownValue;

// 다운 캐스팅을 해도 오류가 발생하지 않는다
undefinedValue = anyValue;