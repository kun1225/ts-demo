let value: any = 123;

value = "abc";
value = true;

let value2: any = "abc";
// console.log(value2.toFixed(2));

let data: any = 123;
let message: string = data;
console.log(message.length); // undefined

function printLength(value: any): void {
  console.log(value.length);
}

// *** unknown ***

let value3: unknown = "abc";

if (typeof value3 === "string") {
  console.log(value3.toUpperCase());
}

if (typeof value3 === "number") {
  console.log(value3.toFixed(2));
}
