// function getAge() {
//     return Promise.resolve(25);
// }const age = getAge();

// console.log(age);
// // What gets printed?

// // Not 25.

// // It prints something like:

// // Promise { 25 }

// // (or Promise { <fulfilled>: 25 } depending on the environment)

// // Because getAge() returns a Promise object.

// async function showAge() {
//     const age = await getAge();

//     console.log(age);
// }

// showAge();

// // Now the output is:

// // 25

// // Because await unwraps the Promise and gives you the resolved value.



// // 🎯 Exercise 23.1 (Updated)


// function getAge() {
//     return Promise.resolve(25);
// }

// async function printAge() {
//     console.log("Start");

//     const age = await getAge();

//     console.log(age);

//     console.log("End");
// }

// printAge();


// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Data");
//         }, 2000);
//     });
// }

// async function showData() {
//     console.log("1");

//     const result = await getData();

//     console.log(result);

//     console.log("2");
// }

// console.log("Start");

// showData();

// console.log("End");

// // Error Handling with async/await

// async function demo() {
//     try {
//         console.log("Start");

//         const value = await Promise.resolve(100);

//         console.log(value);

//         console.log("End");
//     } catch (error) {
//         console.log(error);
//     }
// }

// demo();


// async function demo2() {
//     try {
//         console.log("A");

//         const value = await Promise.reject("Something Failed");

//         console.log(value);

//         console.log("B");
//     } catch (error) {
//         console.log(error);
//     }

//     console.log("C");
// }

// demo2();


// async function demo3() {
//     console.log("1");

//     try {
//         const value = await Promise.resolve("2");
//         console.log(value);

//         throw new Error("Oops");
//     } catch (error) {
//         console.log(error.message);
//     }

//     console.log("3");
// }

// console.log("Start");

// demo3();

// console.log("End");


async function demo4() {
    console.log("1");

    try {
        const value = await Promise.resolve("2");
        console.log(value);

        throw new Error("Oops");
    } catch (error) {
        console.log(error.message);
    }

    console.log("3");
}

console.log("Start");

demo4();

console.log("End");