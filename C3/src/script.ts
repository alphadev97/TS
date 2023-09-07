// Defining types from the beginning to avoid clutter (Called Type aliases)

// type userName = number | string;

// let a: userName;

// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   return n * m;
// };

// Function with type declaration

// type userName = (n: number, m: number) => number;

// let a: userName;

// const func: userName = (n, m): number => {
//   console.log(n, m);
//   return n * m;
// };

// Array

const arr: number[] = [12, 24, 65, 14];

const arr1: [number, number, number] = [25, 26, 24];

// another syntax
const arr2: Array<string> = ["usama"];

// if we want to add 2 types
const arr3: Array<string | number> = ["usama", 254];
