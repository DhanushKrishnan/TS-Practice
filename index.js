"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Dhanush is practicing TS");
for (let i = 1; i < 4; i++) {
    console.log(i);
}
function addOne(num) {
    return num += 1;
}
var sum = addOne(10);
console.log(sum);
const double = (x, y, z) => (x * y * z);
const res = double(6, 6, 6);
console.log(res);
function greet(user = "Anonymous") {
    return `Hello ${user}`;
}
const res1 = greet();
console.log(res1);
const double2 = (x) => x * x;
console.log(double2(9));
var num = [1, 2, 3, 4];
var names = ["Alice", "Bob", "Charlie"];
var values = [1, 2, 3, 4, 5, 6];
console.log(num);
console.log(names);
console.log(values);
const items = [];
items.push("keyboard");
items.push("Monitor");
items.push("CPU");
console.log(items);
let items1 = ["ABC", "DEF", "GHI"];
console.log(items1);
