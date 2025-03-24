/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    name: 'hello';
}

const person: Person = {
    name: "",
    age: 25,
};

/**
 * 모듈 보강하기
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib = {
    a: 1,
    b: 2,
    c: 'hello',
}
