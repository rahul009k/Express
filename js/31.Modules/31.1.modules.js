// Imagine you have one file with 1000 lines of code.
// index.js
// ├── Login
// ├── Register
// ├── Database
// ├── API
// ├── Math Functions
// ├── Validation
// ├── Email
// ├── Payments
// └── ...
//
// It becomes difficult to manage.
// Instead, we split the code into multiple files:
// project/
// │
// ├── index.js
// ├── math.js
// ├── user.js
// └── helper.js
//
// This is called Modules.

// Export example: math.js
export function add(a, b) {
    return a + b;
}

// Here we are saying:
// "Other files are allowed to use the add function."

// Import example: index.js
// import { add } from "./math.js";
// console.log(add(10, 20));
// Output: 30

// Real-world example: user.js
export function login() {
    console.log("Login");
}

export function logout() {
    console.log("Logout");
}

// Then in index.js
// import { login, logout } from "./user.js";
// login();
// logout();
// Output:
// Login
// Logout

// Important Rule:
// import { add } from "./math.js";
// - ./ means current folder.
// - math.js is the file name.
// - The .js extension is commonly included when using ES modules.
