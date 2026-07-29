const student = {
    id: 1,
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};
console.log(student.id);
console.log(student.name);
console.log(student.course);
console.log(student.marks);
console.log(student["name"]);
console.log(student["id"]);
console.log(student["course"]);
console.log(student["marks"]);



const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 50000
};

const property = "department";
console.log(employee.property);
console.log(employee[property]);