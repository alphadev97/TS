"use strict";
// type FuncTyp = (n: number, m: number, l?: number) => number;
const users = [
    {
        name: "Usama",
        age: 25,
    },
    {
        name: "Hammad",
        age: 20,
    },
    {
        name: "Yasir",
        age: 24,
    },
    {
        name: "Huzaifa",
        age: 18,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "Hammad");
const filteredPeopleByAge = filterByPeoples(users, "age", 18);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
