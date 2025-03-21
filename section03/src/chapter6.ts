/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '김아무개';
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: '곰돌이',
    color: 'brown',
    breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이라면 가능
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// number 타입과 string 타입은 겹치는 부분이 없으므로 에러 발생!
// let num3 = 10 as string;

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

// cat.name = ''; 

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author ?: string;
};

let post: Post = {
    title: '게시글1',
    author: '김아무개',
};

const len: number = post.author!.length;
