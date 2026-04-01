// *** 一、函式參數型別與回傳型別 ***

function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);

const minus = (a: number, b: number): number => {
  return a - b;
};

const minus2: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// *** 二、函式型別 ***

type AddFn = (a: number, b: number) => number;
const add2: AddFn = (a, b) => {
  return a + b;
};

type Logger = (message: string) => void;
function handleMessage(msg: string, logger: Logger) {
  logger(msg);
}

const log: Logger = (message) => {
  console.log(message);
};

handleMessage("hello", log);

// *** 三、Optional 與 Default 參數 ***

function greet(name: string, title: string = "Mr.") {
  if (title) {
    console.log(`${title} ${name}`);
  } else {
    console.log(name);
  }
}

greet("David");

// *** 四、用 Literal 型別限制函式參數 ***

function getToastColor(type: "success" | "error") {
  if (type == "success") {
    console.log("green");
  }

  if (type === "error") {
    console.log("red");
  }
}

getToastColor("success");

// *** 五、Rest 參數 ***

function sum(...numbers: number[]) {
  console.log(numbers.reduce((a, b) => a + b, 0));
}

sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5);

// *** 六、void 與 never ***

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

type Status = "loading" | "success" | "error" | "pending";
function handleStatus(status: Status) {
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

  const neverValue: never = status;
  return neverValue;
}
handleStatus("pending");

// *** 七、函式過載 ***

//  overload signatures
function double(value: number): number;
function double(value: string): string;

function double(value: number | string) {
  if (typeof value === "number") return value * 2;
  return value + value;
}

console.log(double(2));
console.log(double("3"));

const res = double("4");
console.log(res.toUpperCase());
