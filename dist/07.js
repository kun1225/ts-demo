"use strict";
// *** 一、函式參數型別與回傳型別 ***
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
add(1, 2);
const minus = (a, b) => {
    return a - b;
};
const minus2 = (a, b) => {
    return a - b;
};
const add2 = (a, b) => {
    return a + b;
};
function handleMessage(msg, logger) {
    logger(msg);
}
const log = (message) => {
    console.log(message);
};
handleMessage("hello", log);
// *** 三、Optional 與 Default 參數 ***
function greet(name, title = "Mr.") {
    if (title) {
        console.log(`${title} ${name}`);
    }
    else {
        console.log(name);
    }
}
greet("David");
// *** 四、用 Literal 型別限制函式參數 ***
function getToastColor(type) {
    if (type == "success") {
        console.log("green");
    }
    if (type === "error") {
        console.log("red");
    }
}
getToastColor("success");
// *** 五、Rest 參數 ***
function sum(...numbers) {
    console.log(numbers.reduce((a, b) => a + b, 0));
}
sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5);
// *** 六、void 與 never ***
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
function handleStatus(status) {
    if (status === "loading") {
        console.log("loading");
        return "loading";
    }
    if (status === "success") {
        console.log("success");
        return "success";
    }
    if (status === "error") {
        console.log("error");
        return "error";
    }
    if (status === "pending") {
        console.log("pending");
        return "pending";
    }
    const neverValue = status;
    return neverValue;
}
handleStatus("pending");
function double(value) {
    if (typeof value === "number")
        return value * 2;
    return value + value;
}
console.log(double(2));
console.log(double("3"));
const res = double("4");
console.log(res.toUpperCase());
