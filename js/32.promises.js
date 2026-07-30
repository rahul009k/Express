const promise = new Promise((resolve, reject) => {
    resolve("Hello Rahul");
});

promise.then(result => {
    console.log(result);
});

const promise1 = new Promise((resolve, reject) => {
    reject("Server Error");
});

promise1
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


const promise2 = new Promise((resolve, reject) => {
    resolve(100);
});

promise2
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


//     console.log("Start");

// const promise4 = new Promise((resolve) => {
//     resolve("Done");
// });

// promise4.then(result => {
//     console.log(result);
// });

// console.log("End");

const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

console.log("Start");

promise5.then(result => {
    console.log(result);
});

console.log("End");

//i will get first start then end then after 2 sec Data Loaded


console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");

// Output order will be: 1, 3, 5, 4, 2
// Explanation:
// 1 is printed first.
// setTimeout(() => console.log("2"), 1000) schedules "2" to run after 1 second.
// 3 is printed next.
// setTimeout(() => console.log("4"), 0) schedules "4" to run as soon as the current synchronous code finishes.
// 5 is printed next.
// After the main synchronous code completes, the 0ms timer runs and prints 4.
// Finally, after 1 second, the 1000ms timer runs and prints 2.

//Promise Chaining

Promise.resolve(20)
    .then(result => {
        return result + 10;
    })
    .then(result => {
        return result * 2;
    })
    .then(result => {
        console.log(result);
    });


//     Why is it called "Chaining"?

// Because each .then() returns another Promise, allowing you to chain the next .then().

// Promise
//    │
//    ▼
// .then()
//    │
//    ▼
// Promise
//    │
//    ▼
// .then()
//    │
//    ▼
// Promise
//    │
//    ▼
// .then()

Promise.resolve(2)
    .then(result => {
        return result + 3;
    })
    .then(result => {
        return result * 4;
    })
    .then(result => {
        return result - 5;
    })
    .then(result => {
        console.log(result);
    });


    // output 15

    //Error Handling in Promise Chains
Promise.resolve(10)
    .then(result => {
        console.log(result);
        throw new Error("Failed");
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    });

// Classification
// Error → Built-in Class
// new Error() → Error Object
// throw → JavaScript keyword
// .catch() → Promise Method

// Explanation:
// Promise.resolve(10) creates a resolved promise with the value 10.
// The first .then() runs and prints 10.
// Then it throws an Error, which means the promise becomes rejected.
// The next .then() will not run because the chain is broken by the error.
// .catch() handles the error and prints the error message: "Failed".
// Think of it like this:

// .then()
//     │
//     ▼
// .then()
//     │
//     ▼
// ❌ Error
//     │
//     │
//     └────────────► .catch()


Promise.reject("Network Error")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Here, the .then() is skipped and the code goes directly to .catch() to handle the error because the promise is rejected. 