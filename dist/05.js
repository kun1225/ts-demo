"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value = 123;
value = "abc";
value = true;
let value2 = "abc";
// console.log(value2.toFixed(2));
let data = 123;
let message = data;
console.log(message.length); // undefined
function printLength(value) {
    console.log(value.length);
}
// *** unknown ***
let value3 = "abc";
if (typeof value3 === "string") {
    console.log(value3.toUpperCase());
}
if (typeof value3 === "number") {
    console.log(value3.toFixed(2));
}
