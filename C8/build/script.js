"use strict";
// type FuncTyp = (n: number, m: number, l?: number) => number;
const myObj = {
    name: "Usama",
    email: "gdgsdhd@HJDFHK.COM",
};
const getName = () => {
    return myObj["name"];
};
const getEmail = () => {
    return myObj["email"];
};
const detData = (key) => {
    return myObj[key];
};
detData("email");
