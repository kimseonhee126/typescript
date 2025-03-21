// enum 타입
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
};

enum Language {
    korean = 'KO',
    english = 'EN',
};

const user1 = {
    name: '김아무개',
    role: Role.ADMIN,
    Language: Language.korean,
};

const user2 = {
    name: '이아무개',
    role: Role.USER,
};

const user3 = {
    name: '홍아무개',
    role: Role.GUEST,
};

console.log(user1, user2, user3);