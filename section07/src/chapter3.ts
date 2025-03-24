/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: 123123,
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: 'hello',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * 유저 관리 프로그램
 * 유저 구분 : 학생 / 개발자
 */
interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    if (user.profile.type !== 'student') {
        console.log('잘 못 들어오셨습니다.');
        return;
    }

    const school = user.profile.school
    console.log(`${school}로 등교 완료하였습니다.`);
}

const developerUser: User<Developer> = {
    name: '김아무개',
    profile: {
        type: 'developer',
        skill: 'TypeScript',
    },
};

const studentUser: User<Student> = {
    name: '이아무개',
    profile: {
        type: 'student',
        school: '~~대학교',
    },
};

goToSchool(studentUser);
