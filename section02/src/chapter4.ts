// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: '김아무개',
    nickname: '김아무개',
    birth: '2001-12-26',
    bio: '안녕하세요',
    location: '서울시',
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
