/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

// person의 타입을 추론해서 TypeScript 가 알아서 Person 객체를 만들어준다
// type Person = typeof person;

// 그래서 typeof person 을 사용해서 Person 타입을 추론할 수 있게 할 수 있다
// function getPropertyKey(person: Person, key: keyof typeof person) {
//     return person[key];
// }

// keyof 연산자 뒤에는 꼭 '타입'이 와야 한다
function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: '김아무개',
    age: 25,
};

getPropertyKey(person, 'name');
