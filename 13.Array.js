const colors = ['red', 'green', 'blue', 'black'];
console.log(colors);
console.log(colors[0]);
console.log(colors[3]);

const numbers = [10, 20, 30, 40];
numbers[1]=25;
numbers[3]=45;
console.log(numbers[1]);
console.log(numbers[3]);

const cities = ["Delhi", "Mumbai"];
cities.push("Bangalore");
cities.push("Chennai")

console.log(cities);


const animals = ["Dog", "Cat", "Tiger", "Lion"];
 const removedAnimal=animals.pop();
 console.log(removedAnimal);
 console.log(animals);

 const books = ["Java", "C#", "Python", "JavaScript"];
 const removedBook=books.shift();
 console.log(removedBook);
 console.log(books);

 const cars = ["BMW", "Audi"];
 cars.unshift("Toyota","Tesla");
 console.log(cars);

 const languages = ["Java", "C#", "Python", "JavaScript", "Go"];
 console.log(languages.length);
 console.log(languages[languages.length-1]);