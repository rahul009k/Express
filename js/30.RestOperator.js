function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(1, 2, 3, 4, 5);
function print(first, ...others) {
    console.log(first);
    console.log(others);
}

print(10, 20, 30, 40);

function sum(...numbers) {
    let total=(numbers.reduce((acc, curr) => acc + curr, 0));
    console.log(total);
}

sum(10, 20, 30);