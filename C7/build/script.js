"use strict";
// type FuncTyp = (n: number, m: number, l?: number) => number;
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product1 = new Product("Macbook", 2000, 20);
