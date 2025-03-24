/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;

let b : StringNumberSwitch<string>;

// c의 타입은 number | string(number와 string 유니온 타입)
let c : StringNumberSwitch<number | string>;

let d : StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// never | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string> |

// 2 단계
// never |
// string |
// never

// 최종 결과
// string