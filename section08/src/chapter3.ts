/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
    [key in keyof User]: boolean;
};

// 읽기 모드의 User 타입 설정하기
type ReadOnlyUser = {
    readonly [key in keyof User]: User[key];
};

function fetchUser(): ReadOnlyUser {
    // ...기능
    return {
        id: 1,
        name: '김아무개',
        age: 25,
    };
}

const user = fetchUser();
// user.id = 1;

function updateUser(user: User) {
    // age 만 수정하는 기능
}

updateUser({
    id: 1,
    name: '김아무개',
    age: 27,
});

