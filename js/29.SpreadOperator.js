const numbers = [1, 2, 3];

// Create a new array using the spread operator
// and add 4 and 5 at the end.

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);


const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Potato"];

const food = [...fruits, ...vegetables];
console.log(food);

//Copy into Array
const original = [10, 20, 30];

const copy = [...original];
console.log(copy);


//Copy into Object
const person = {
    name: "Rahul",
    age: 24
};

// Create a new object called personCopy
// using the spread operator.

const personCopy = {...person};
console.log(personCopy);

//copy into Object and add new property
const student = {
    name: "Rahul",
    age: 24,
    city: "Hyderabad"
};

const updatedStudent={
    ...student,
    city:"Bangalore"
}
// Write your code here

console.log(updatedStudent);

// Without modifying the original data, create:

// A new array updatedSkills that adds "Express" at the end.
// A new object updatedUser where:
// age becomes 25
// skills becomes updatedSkills
const user = {
    name: "Rahul",
    age: 24,
    skills: ["HTML", "CSS", "JavaScript"]
};
const updatedUser={
    ...user,
    skills:[...user.skills,"Express"]
}

// Write your code here

console.log(updatedUser);