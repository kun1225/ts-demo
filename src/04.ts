// *** Symbol ***

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 === sym2); // false

let sym3 = Symbol("token");
console.log("🚀 ~ sym3:", sym3);

let idKey = Symbol("id");

let user: any = {
  [idKey]: 123,
  name: "Alice",
  role: "Admin",
};

console.log(user[idKey]);

for (const key in user) {
  console.log(key);
}

console.log(Object.keys(user));

let myKey = Symbol();

user[myKey] = () => {};

let s1 = Symbol.for("app.version");
let s2 = Symbol.for("app.version");
console.log(s1 === s2);

let s3: symbol = Symbol();
const s4: unique symbol = Symbol();

// *** BigInt ***
console.log(9007199254740991 + 1); // 9007199254740992 ✅
console.log(9007199254740991 + 2); // 9007199254740992 ❌ 精度錯誤

console.log(Number.MAX_SAFE_INTEGER);

let bigNum1: bigint = 123456789012345678901234567890n;
console.log("🚀 ~ bigNum1:", bigNum1);

let bigNum2: bigint = BigInt("123456789012345678901234567890");
console.log("🚀 ~ bigNum2:", bigNum2);

let bigNum3 = 1000n;
let bigNum4 = 10n;

let convertedNumber = Number(bigNum3);
console.log("🚀 ~ convertedNumber:", convertedNumber);
let convertedBigInt = BigInt(convertedNumber);
console.log("🚀 ~ convertedBigInt:", convertedBigInt);

console.log(7n / 2n); // 3n
