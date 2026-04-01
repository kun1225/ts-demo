let count: number;
let message: string = "hello";

// *** Boolean ***
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

if (isLoggedIn) {
  console.log("歡迎回來");
} else {
  console.log("請先登入");
}

// *** Number **8
let age: number = 18;
let temp: number = -10;

let decimal: number = 42; // 十進位
let hexadecimal: number = 0xff; // 十六進位
let binary: number = 0b101010; // 二進位
let octal: number = 0o52; // 八進位

console.log(decimal, hexadecimal, binary, octal);
// 42 255 42 42

// NaN
// let notANumber: number = 100 / "abc";

// Infinity
let huge = 10 / 0;

// *** String ***

const str1: string = "123";
const str2: string = "123";
const str3: string = `123`;

let user: string = "Bob";
let userAge: number = 28;

let greeting: string = `Hello, my name is ${user}.
Next year, I will be ${userAge + 1} years old.`;

console.log(greeting);

// *** Null & Undefined ***

let a: undefined;

let n: null = null;

if (a) console.log("a");
if (n) console.log("n");

if (a == n) console.log("a == n");
if (a === n) console.log("a === n");

// *** Void ***

function showMessage(): void {
  console.log("hello");
}
const res = showMessage();
