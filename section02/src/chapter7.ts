// void
// void -> 아무것도 없는 타입

function func1(): string {
    return "hello";
};

function func2(): void {
    console.log('hello');

    // 모든 것을 반환할 수 없다
    // return null;
    // return undefined;
};

// never -> 존재하지 않는 불가능한 타입
// 절대로 정상적으로 종료될 수가 없을 때, 함수에 반환값이 있는 거 자체가 모순일 때 never 를 사용
function func3(): never {
    while (true) {

    }
};

function func4(): never {
    throw new Error();
};

// 다 담을 수 없다
let a: never;

// a = 1;
// a = {};
// a = "";
// a = undefined;