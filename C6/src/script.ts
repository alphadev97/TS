// type FuncTyp = (n: number, m: number, l?: number) => number;

// // Optional parameter

// const func: FuncTyp = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;

//   return n * m * l;
// };

// func(25, 23);

// ------------------------------------------------

// // Default parameter
// type FuncTyp = (n: number, m: number, l?: number) => number;

// const func: FuncTyp = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

// ------------------------------------------------

// // Rest Operator
// type FuncTyp = (...m: number[]) => number[];

// const func: FuncTyp = (...m) => {
//   return m;
// };

// func(25, 23, 54, 41, 7);

// ------------------------------------------------

// function lol(n: number): number {
//   return 45;
// }

// function with Object

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type getDataType = (product: Product) => void;

// const getData: getDataType = (product): void => {
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Macbook",
//   stock: 46,
//   price: 9999,
//   photo: "samplephotoUrl",
//   id: "gJHdGSdjkAGd",
// };

// getData(productOne);

// Never Type

// type themeMode = "light" | "dark";

// const mode: themeMode = "light";

// const errorHandler = (): never => {
//   throw new Error();
// };
