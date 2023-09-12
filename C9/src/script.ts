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

// -------------------------------------------

// Classes

// class Player {
//   //   private height; // private property cannot access outside class
//   //   public weight;

//   public readonly id: string;

//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   get getMyHeight(): number {
//     return this.height;
//   }

//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }

// const abhi = new Player(100, 150, 23);
// console.log("Height", abhi.getMyHeight);
// abhi.changeHeight = 500;
// console.log("Height", abhi.getMyHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());
// console.log("Id", abhi.id);

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface giveId {
//   getId: () => string;
// }

// class Product implements ProductType, giveId {
//   private id: string = String(Math.random() * 1000);

//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}

//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);

// --------------------------------------------------------

// Type Assertion

// const btn = document.getElementById("btn")!;
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

// const img = document.querySelector("img")!;
// img.src;

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;
// let addedd = document.getElementById("addedd") as HTMLParagraphElement;

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const value = Number(myinput.value);
//   addedd.innerHTML = String(value + 20);
//   console.log(value);
//   console.log(typeof value);
// };

// interface Person {
//   // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myObj: Person = {
//   name: "Usama",
//   email: "gdgsdhd@HJDFHK.COM",
// };

// const getName = (): string => {
//   return myObj["name"];
// };

// const getEmail = (): string => {
//   return myObj["email"];
// };

// const detData = (key: keyof Person): string => {
//   return myObj[key];
// };

// detData("email");

// -----------------------------------------------------------

// Type Utility

//? Partial <Type>
//? Required <Type>
//? Readonly <Type>
//? Record <Keys, Type>
//? Pick < Type, Keys>
//? Omit < Type, Keys>
//? Exclude < Type, ExcludedUnion>
//? Extract < Type, Union>
//? NonNullable < Type>
//? Parameters < Type>
//? ConstructorParameters < Type>
//? ReturnType < Type>
//? InstanceType < Type>

//? Partial <Type>
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Partial<User>;

//? Required <Type> - opposite of partial
// type User = {
//   name?: string;
//   email?: string;
// };

// const user2: Required<User> = {
//   name: "usama",
//   email: "usama@usama.com",
// };

//? Readonly <Type> - made every property constant (readonly)
// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Readonly<User>;

// const user: User2 = {
//   name: "usama",
//   email: "usama@usama.com",
// };

//? Record <Keys, Type>

// type user = {
//   name: string;
//   email: string;
// };

// type user2 = Record<"name" | "email" | "gender", string>;

// Example

// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "andrew" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   andrew: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

//? Pick < Type, Keys>

// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }

// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">

//? Omit < Type, Keys>
