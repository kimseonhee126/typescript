/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
};

const person: Person = {
    name: '김아무개',
    age: 25,
    sayHi: function() {
        console.log('Hi');
    },
};

person.sayHi();
person.sayHi(1, 2);