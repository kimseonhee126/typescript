import { LargeNumberLike } from "crypto";

/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성 따져보기
 */
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진돗개',
};

animal = dog;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactJS',
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사
 * 실제 타입에는 정의해 놓지 않은 프로퍼티를 작성하면 안 되도록 막는 검사
 */

let book2: Book = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactJS',
};

let book3: Book = programmingBook;

function func(book: Book) {}

console.log(func(programmingBook));
