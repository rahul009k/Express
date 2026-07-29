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
