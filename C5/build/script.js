"use strict";
// type FuncTyp = (n: number, m: number, l?: number) => number;
const func = (n, m, l = 20) => {
    return n * m * l;
};
func(25, 23);
