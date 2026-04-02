// *** 一、為什麼需要物件型別 ***

const userA = {
  name: "John",
  age: 30,
};

// *** 二、如何寫物件型別？***

const userB: { name: string; age: number } = {
  name: "David",
  age: 18,
};

const userC: { name: string; age: number } = {
  name: "David",
  age: 18,
};

// *** 三、type（型別別名）與 interface（介面） ***

type User = {
  name: string;
  age: number;
  address: {
    city: string;
    zip: string;
  };
};

const userD: User = {
  name: "David",
  age: 18,
};

interface UserWithId {
  id: string;
  name: string;
  age: number;
  address: {
    city: string;
    zip: string;
  };
}

const userE: UserWithId = {
  id: "xyz",
  name: "David",
  age: 18,
};

// Index Signature
type Dictionary = {
  [key: string]: string;
};
const enDictionary: Dictionary = {
  title: "Hello",
  subtitle: "world",
  content: "hi",
};
const zhDictionary: Dictionary = {
  title: "嗨囉",
  subtitle: "你好",
};

// *** 四、optional 與 readonly ***

type UserA = {
  name: string;
  // age?: number;
  age: number | undefined;
};

const userF: UserA = {
  name: "David",
  age: undefined,
};

type UserB = {
  readonly id: string;
  readonly createdAt: string;
};

const userG: UserB = {
  id: "xyz",
  createdAt: "today",
};

// userG.id = "123";

// *** 五、type 的能力 ***

// Union (or)
type Status = "loading" | "success" | "error";

// Intersection (and)
type A = { name: string };
type B = { age: number };

type C = A & B;

const userH: C = {
  name: "David",
  age: 18,
};

type Fn = () => void;
type MyString = string;

// *** 六、interface 的能力 ***

// extends (class)
interface BaseUser {
  id: string;
  name: string;
}

interface UserProfile extends BaseUser {
  avatarUrl: string;
  bio?: string;
}

const userI: UserProfile = {
  id: "123",
  name: "david",
  avatarUrl: "https://...",
};

// Declaration Merging 宣告合併

interface UserC {
  name: string;
}
interface UserC {
  age: number;
}
interface UserC {
  id: string;
}

const userJ: UserC = {
  id: "13",
  name: "david",
  age: 18,
};

// interface AdminUser extends BaseUser {
//   isAdmin: true
// }

type AdminUser = BaseUser & {
  isAdmin: true;
};

// *** 七、type 和 interface 可以互相代替使用 ***

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

const bird3: BirdInterface = bird1; // 可以

// *** 八、type vs interface 怎麼選 ***

// 1. 錯誤訊息
// 2. 依照團隊為主

interface ApiUser {
  data: {
    user: {
      name: string;
      age: number;
    };
  };
  error?: string;
}

interface Article {
  title: string;
  createAt: string;
  slug: string;
}

type State =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };

// *** 九、as const ***

const FETCH_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

// FETCH_STATUS.SUCCESS = "done"; // Error: Cannot assign to 'SUCCESS' because it is a read-only property.

function isStatusSuccess(currentStatus: string) {
  return currentStatus === FETCH_STATUS.SUCCESS;
}

// *** 十、enum ***

enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

const currentRole = Role.User;
console.log("🚀 ~ currentRole:", currentRole);
