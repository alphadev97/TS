// Defining types from the beginning to avoid clutter (Called Type aliases)

type userName = number | string;

let a: userName;

const func = (n: number, m: number): number => {
  console.log(n, m);
  return n * m;
};
