function great(name){
console.log("Hello, " + name + "!");
}
great("rahul");
// function add(a, b){
// return a + b;
// }
// let result=add(5, 10);
// console.log(result);
// function multiply(a, b){
// return a * b;
// }
// let product=multiply(5, 10);
// console.log(product);
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
const sum = calc.add(5, 10);
console.log(sum);

// const subtract=(a,b)=>{return a-b};
// const difference=subtract(10,5);
// console.log(difference);

// const isEven=num=>num % 2 === 0;
// console.log(isEven(4)); // true
// console.log(isEven(3)); // false


const discount=(price,discountPercentage)=>{
    return price - (price * discountPercentage / 100)};
    console.log(discount(100, 20)); // 80

function subtract(a,b){
        return a-b
    };
    const difference=subtract(10,5);
    console.log(difference)
    function isEven(num){
        return num%2==0
    }
    console.log(isEven(5));