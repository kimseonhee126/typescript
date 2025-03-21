let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: '김아무개'
};

let config: {
    // 값 변경할 수 없게 -> 읽기 전용 속성
    readonly apiKey: string;
} = {
    apiKey: "API KEY",
};

