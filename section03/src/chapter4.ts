/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재
 */



/**
 * 1. 합집합 - Union
 */
let a: string | number;
a = 1;

let arr: (number | string | boolean)[] = [1, 'hello', true, 10];



type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

/**
 * 2. 교집합 - Intersection
 */
let variable: number & string;

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};
