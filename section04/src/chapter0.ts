// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => {
    a + b;
}

/**
 * 함수의 매개변수
 * 필수 매개변수는 선택적 매개변수보다 무조건 앞에 위치해야 한다
 */
function introduce(name = '김아무개', age: number, tall?: number) {
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
}

introduce('김아무개', 25, 176);

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((item) => (sum = sum + item));

    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5, 6);
