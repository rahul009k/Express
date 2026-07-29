const cities = ["Delhi", "Mumbai", "Bangalore"];
const [city1,city2,city3]=cities;
console.log(city1);
console.log(city2);
console.log(city3);

//Destructuring Trick #1: Skip Values
const colors = ["Red", "Green", "Blue", "Black"];
const [firstColor,,,lastColor]=colors;
console.log(firstColor);
console.log(lastColor);

//Destructuring Trick #2: Rest Operator (...)
const subjects = ["Math", "Science", "English", "History"];
const [firstSubject,...otherSubjects]=subjects;
console.log(firstSubject);
console.log(otherSubjects);

//Destructuring Trick #3: Default Values
const animals = ["Dog"];
const [firstAnimal, secondAnimal="Cat"]=animals;
console.log(firstAnimal);
console.log(secondAnimal);

//🎯 Destructuring Trick #4: Object Destructuring
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

const {name, price}=product;
console.log(name);
console.log(price);


//🎯 Destructuring Trick #5: Rename Variables

const employee = {
    id: 101,
    department: "IT"
};

const {id: employeeId, department: dept}=employee;
console.log(employeeId);
console.log(dept);

//🎯 Destructuring Trick #6: Nested Object Destructuring

const company = {
    name: "OpenAI",
    location: {
        city: "San Francisco",
        country: "USA"
    }
};

const {location: {city}}=company;
console.log(city);