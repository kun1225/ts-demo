"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let count;
let message = "hello";
// *** Boolean ***
let isLoggedIn = true;
let hasPermission = false;
if (isLoggedIn) {
    console.log("歡迎回來");
}
else {
    console.log("請先登入");
}
// *** Number **8
let age = 18;
let temp = -10;
let decimal = 42; // 十進位
let hexadecimal = 0xff; // 十六進位
let binary = 0b101010; // 二進位
let octal = 0o52; // 八進位
console.log(decimal, hexadecimal, binary, octal);
// 42 255 42 42
// NaN
// let notANumber: number = 100 / "abc";
// Infinity
let huge = 10 / 0;
// *** String ***
const str1 = "123";
const str2 = "123";
const str3 = `123`;
let user = "Bob";
let userAge = 28;
let greeting = `Hello, my name is ${user}.
Next year, I will be ${userAge + 1} years old.`;
console.log(greeting);
// *** Null & Undefined ***
let a;
let n = null;
if (a)
    console.log("a");
if (n)
    console.log("n");
if (a == n)
    console.log("a == n");
if (a === n)
    console.log("a === n");
// *** Void ***
function showMessage() {
    console.log("hello");
}
const res = showMessage();
