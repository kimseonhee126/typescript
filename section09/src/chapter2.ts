/**
 * infer
 * inference => 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

// 여기서 R은 T 타입을 말하는 것
type A = ReturnType<FuncA>;         // T가 string 타입이면 T를 서브타입으로 만들 수 있는 R 타입을, 아니라면 never 타입을
type B = ReturnType<FuncB>;         // T가 number 타입이면 T를 서브타입으로 만들 수 있는 R 타입을, 아니라면 never 타입을
type C = ReturnType<number>;

/**
 * 예제
 */

// 1. T는 프로미스 타입이어야 한다
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다
type PromiseUnpack<T> = T extends Promise<infer R> ? any : never;

// number 타입
type PromiseA = PromiseUnpack<Promise<number>>;

// string 타입
type PromiseB = PromiseUnpack<Promise<string>>;
