// enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
var Language;
(function (Language) {
    Language["korean"] = "KO";
    Language["english"] = "EN";
})(Language || (Language = {}));
;
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
export {};
