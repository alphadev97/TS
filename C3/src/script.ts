// Defining types from the beginning to avoid clutter (Called Type aliases)

// type userName = number | string;

// let a: userName;

// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   return n * m;
// };

// Function with type declaration

type userName = (n: number, m: number) => number;

let a: userName;

const func: userName = (n, m): number => {
  console.log(n, m);
  return n * m;
};
