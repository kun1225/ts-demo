"use strict";
// *** 一、為什麼需要物件型別 ***
Object.defineProperty(exports, "__esModule", { value: true });
const userA = {
    name: "John",
    age: 30,
};
// *** 二、如何寫物件型別？***
const userB = {
    name: "David",
    age: 18,
};
const userC = {
    name: "David",
    age: 18,
};
const userD = {
    name: "David",
    age: 18,
};
const userE = {
    id: "xyz",
    name: "David",
    age: 18,
};
const enDictionary = {
    title: "Hello",
    subtitle: "world",
    content: "hi",
};
const zhDictionary = {
    title: "嗨囉",
    subtitle: "你好",
};
const userF = {
    name: "David",
    age: undefined,
};
const userG = {
    id: "xyz",
    createdAt: "today",
};
const userH = {
    name: "David",
    age: 18,
};
const userI = {
    id: "123",
    name: "david",
    avatarUrl: "https://...",
};
const userJ = {
    id: "13",
    name: "david",
    age: 18,
};
const bird1 = { wings: 2 };
const bird2 = { wings: 2 };
const bird3 = bird1; // 可以
// *** 九、as const ***
const FETCH_STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};
FETCH_STATUS.SUCCESS = "done"; // Error: Cannot assign to 'SUCCESS' because it is a read-only property.
function isStatusSuccess(currentStatus) {
    return currentStatus === FETCH_STATUS.SUCCESS;
}
// const currentRole = Role.User;
// console.log("🚀 ~ currentRole:", currentRole);
