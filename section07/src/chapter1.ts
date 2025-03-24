/**
 * 첫 번째 사례
 */

function swap<T, U>(a: T, b: T) {
  return [b, a];
}

const [a, b] = swap(1, 2);

/**
 * 두 번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "my name is"]);

/**
 * 세 번째 사례
 */

interface InterfaceA {
    length: number;
}

interface InterfaceB extends InterfaceA {};

// T라는 타입은 length가 number인 property를 가지고 있는 객체이다
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
