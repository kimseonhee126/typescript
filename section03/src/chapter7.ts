/**
 * 타입 좁히기
 * 조건문을 이용하여 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말함
 */

type Person = {
    name: string;
    age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name 은 age 살 입니다
function func(value: number | string | Date | Person | null) {
    // typescript 가 자동으로 number 타입으로 자동 추론해준다
    if (typeof value === 'number') {
        console.log(value.toFixed());
    // typescript 가 자동으로 string 타입으로 자동 추론해준다
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
};
