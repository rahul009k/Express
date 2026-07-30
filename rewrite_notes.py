from pathlib import Path

root = Path(r'c:\Practice\express\Notes')
files = [p for p in root.glob('*.md') if p.name != 'README.md']

mapping = {
    '01.Hello.md': {
        'title': 'Hello World',
        'definition': 'Hello World is the first basic JavaScript program used to check that the environment is working.',
        'why': 'It introduces the basic syntax of JavaScript and shows how output appears in the console.',
        'syntax': 'console.log("Hello World");',
        'example': 'console.log("Hello World");',
        'lines': '- console.log() prints the message to the console.'
    },
    '01.Variables.md': {
        'title': 'Variables',
        'definition': 'Variables are used to store values that can be reused later in a program.',
        'why': 'They make code easier to read, write, and maintain.',
        'syntax': 'let name = "Rahul";\nconst age = 25;',
        'example': 'let name = "Rahul";\nconst age = 25;\nconsole.log(name);',
        'lines': '- let allows the value to be changed later.\n- const keeps the value fixed.'
    },
    '02.Variable.md': {
        'title': 'Variables',
        'definition': 'Variables are containers for storing data in JavaScript.',
        'why': 'They help us write flexible programs without repeating values.',
        'syntax': 'let userName = "Asha";',
        'example': 'let userName = "Asha";\nconsole.log(userName);',
        'lines': '- let declares a variable.\n- The assigned value is stored in memory.'
    },
    '02.Data Types.md': {
        'title': 'Data Types',
        'definition': 'Data types describe the kind of value stored in a variable.',
        'why': 'They help JavaScript understand how to process the value correctly.',
        'syntax': 'let name = "Rahul";\nlet age = 25;\nlet isActive = true;',
        'example': 'let name = "Rahul";\nlet age = 25;\nlet isActive = true;\nconsole.log(typeof name);',
        'lines': '- Strings are text values.\n- Numbers are numeric values.\n- Booleans represent true or false.'
    },
    '03.Variables.md': {
        'title': 'Variables',
        'definition': 'Variables let us store data and use it later in the program.',
        'why': 'They improve readability and reduce repetition.',
        'syntax': 'let score = 10;',
        'example': 'let score = 10;\nscore = 20;\nconsole.log(score);',
        'lines': '- let allows reassignment.\n- The updated value is printed.'
    },
    '04.Operators.md': {
        'title': 'Operators',
        'definition': 'Operators perform calculations, comparisons, and assignments.',
        'why': 'They are essential for working with data in JavaScript.',
        'syntax': 'let result = 10 + 5;',
        'example': 'let a = 10;\nlet b = 5;\nlet result = a + b;\nconsole.log(result);',
        'lines': '- + adds two values.\n- The result is stored in a variable.'
    },
    '05.DataTypes.md': {
        'title': 'Data Types',
        'definition': 'Data types define the category of a value.',
        'why': 'They help us write correct logic and avoid errors.',
        'syntax': 'let value = 100;',
        'example': 'let value = 100;\nconsole.log(typeof value);',
        'lines': '- typeof returns the type of the value.'
    },
    '06.Functions.md': {
        'title': 'Functions',
        'definition': 'Functions are reusable blocks of code that perform a specific task.',
        'why': 'They make programs shorter and easier to maintain.',
        'syntax': 'function greet(name) {\n    return `Hello ${name}`;\n}',
        'example': 'function greet(name) {\n    return `Hello ${name}`;\n}\nconsole.log(greet("Rahul"));',
        'lines': '- The function accepts a parameter.\n- It returns a greeting string.'
    },
    '07.ArrowFunctions.md': {
        'title': 'Arrow Functions',
        'definition': 'Arrow functions provide shorter syntax for writing functions.',
        'why': 'They make code cleaner and easier to read.',
        'syntax': 'const add = (a, b) => a + b;',
        'example': 'const add = (a, b) => a + b;\nconsole.log(add(3, 4));',
        'lines': '- The arrow syntax creates a compact function.'
    },
    '08.ArrowFunctions.ImplicitReturn.md': {
        'title': 'Arrow Functions with Implicit Return',
        'definition': 'Implicit return lets an arrow function return a value without using the return keyword.',
        'why': 'This makes short functions easier to write.',
        'syntax': 'const square = x => x * x;',
        'example': 'const square = x => x * x;\nconsole.log(square(5));',
        'lines': '- The expression is automatically returned.'
    },
    '09.ArrowFunctions.Object.md': {
        'title': 'Arrow Functions Returning Objects',
        'definition': 'Arrow functions can return objects when the object is wrapped in parentheses.',
        'why': 'This avoids confusion with function body braces.',
        'syntax': 'const createUser = () => ({ name: "Rahul" });',
        'example': 'const createUser = () => ({ name: "Rahul" });\nconsole.log(createUser());',
        'lines': '- Parentheses make JavaScript treat the braces as an object literal.'
    },
    '10.This.md': {
        'title': 'this Keyword',
        'definition': 'The this keyword refers to the current object or context.',
        'why': 'It is important in methods and object-based code.',
        'syntax': 'const user = { name: "Rahul" };',
        'example': 'const user = { name: "Rahul", showName() { console.log(this.name); } };\nuser.showName();',
        'lines': '- this refers to the object that called the method.'
    },
    '11.ObjectProperties.md': {
        'title': 'Object Properties',
        'definition': 'Object properties store data in key-value pairs.',
        'why': 'They help us model real-world entities in code.',
        'syntax': 'const student = { name: "Rahul" };',
        'example': 'const student = { name: "Rahul" };\nconsole.log(student.name);',
        'lines': '- The property key is name.\n- The value is Rahul.'
    },
    '12.ObjectCRUD.md': {
        'title': 'Object CRUD',
        'definition': 'CRUD means Create, Read, Update, and Delete operations on objects.',
        'why': 'These operations are common when working with data.',
        'syntax': 'const user = { name: "Rahul" };\nuser.age = 25;',
        'example': 'const user = { name: "Rahul" };\nuser.age = 25;\ndelete user.age;\nconsole.log(user);',
        'lines': '- Create by adding a property.\n- Read by accessing it.\n- Update by changing its value.\n- Delete by removing it.'
    },
    '13.ObjectNested.md': {
        'title': 'Nested Objects',
        'definition': 'Nested objects contain objects inside other objects.',
        'why': 'They are useful for representing structured data.',
        'syntax': 'const user = { profile: { name: "Rahul" } };',
        'example': 'const user = { profile: { name: "Rahul" } };\nconsole.log(user.profile.name);',
        'lines': '- The inner object is accessed through the outer property.'
    },
    '14.ObjectKeys.md': {
        'title': 'Object Keys',
        'definition': 'Object.keys() returns an array of the keys of an object.',
        'why': 'It helps us inspect object properties easily.',
        'syntax': 'Object.keys(user);',
        'example': 'const user = { name: "Rahul", age: 25 };\nconsole.log(Object.keys(user));',
        'lines': '- Object.keys() returns the property names as an array.'
    },
    '15.ObjectValues.md': {
        'title': 'Object Values',
        'definition': 'Object.values() returns the values stored in an object.',
        'why': 'It is useful when we need the data without the keys.',
        'syntax': 'Object.values(user);',
        'example': 'const user = { name: "Rahul", age: 25 };\nconsole.log(Object.values(user));',
        'lines': '- Object.values() returns the values in order.'
    },
    '16.ObjectEntries.md': {
        'title': 'Object Entries',
        'definition': 'Object.entries() returns key-value pairs from an object.',
        'why': 'It is helpful for iteration and transformation.',
        'syntax': 'Object.entries(user);',
        'example': 'const user = { name: "Rahul", age: 25 };\nconsole.log(Object.entries(user));',
        'lines': '- Each entry is an array with a key and value.'
    },
    '17.ForIn.md': {
        'title': 'for...in Loop',
        'definition': 'The for...in loop iterates over the property names of an object.',
        'why': 'It is useful when working with object properties.',
        'syntax': 'for (let key in user) {\n    console.log(key);\n}',
        'example': 'const user = { name: "Rahul", age: 25 };\nfor (let key in user) {\n    console.log(key, user[key]);\n}',
        'lines': '- key stores each property name.\n- user[key] accesses the matching value.'
    },
    '18.Arrays.md': {
        'title': 'Arrays',
        'definition': 'Arrays store multiple values in a single variable.',
        'why': 'They are useful for working with lists of data.',
        'syntax': 'const numbers = [1, 2, 3];',
        'example': 'const numbers = [1, 2, 3];\nconsole.log(numbers[0]);',
        'lines': '- Arrays use zero-based indexing.'
    },
    '19.ForLoop.md': {
        'title': 'for Loop',
        'definition': 'A for loop repeats a block of code a fixed number of times.',
        'why': 'It is helpful for repeated tasks and iteration.',
        'syntax': 'for (let i = 0; i < 3; i++) {\n    console.log(i);\n}',
        'example': 'for (let i = 0; i < 3; i++) {\n    console.log(i);\n}',
        'lines': '- i starts at 0 and increases after each iteration.'
    },
    '20.ForOf.md': {
        'title': 'for...of Loop',
        'definition': 'The for...of loop iterates over values in arrays or other iterables.',
        'why': 'It is simpler than a traditional loop for collections.',
        'syntax': 'for (const item of items) {\n    console.log(item);\n}',
        'example': 'const items = [10, 20, 30];\nfor (const item of items) {\n    console.log(item);\n}',
        'lines': '- Each value is assigned to item one by one.'
    },
    '21.Map.md': {
        'title': 'map()',
        'definition': 'map() creates a new array by applying a function to every element.',
        'why': 'It is useful for transforming data.',
        'syntax': 'array.map(item => item * 2);',
        'example': 'const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);',
        'lines': '- A new array is returned.'
    },
    '22.Filter.md': {
        'title': 'filter()',
        'definition': 'filter() creates a new array with elements that pass a condition.',
        'why': 'It helps select the needed values.',
        'syntax': 'array.filter(item => item > 5);',
        'example': 'const numbers = [1, 2, 3, 4, 5];\nconst result = numbers.filter(n => n > 3);\nconsole.log(result);',
        'lines': '- Only values that satisfy the condition are kept.'
    },
    '23.Find.md': {
        'title': 'find()',
        'definition': 'find() returns the first element that matches a condition.',
        'why': 'It is helpful when you want one matching value.',
        'syntax': 'array.find(item => item > 5);',
        'example': 'const numbers = [1, 3, 5, 7];\nconst result = numbers.find(n => n > 5);\nconsole.log(result);',
        'lines': '- The first matching element is returned.'
    },
    '24.Includes.md': {
        'title': 'includes()',
        'definition': 'includes() checks whether an array contains a specific value.',
        'why': 'It is a simple way to test membership.',
        'syntax': 'array.includes(value);',
        'example': 'const colors = ["red", "green", "blue"];\nconsole.log(colors.includes("green"));',
        'lines': '- The method returns true or false.'
    },
    '25.Some.md': {
        'title': 'some()',
        'definition': 'some() checks whether at least one element passes a test.',
        'why': 'It is useful for existence checks.',
        'syntax': 'array.some(item => item > 10);',
        'example': 'const numbers = [2, 4, 6];\nconsole.log(numbers.some(n => n > 5));',
        'lines': '- It returns true if any item passes the test.'
    },
    '26.Every.md': {
        'title': 'every()',
        'definition': 'every() checks whether all elements satisfy a condition.',
        'why': 'It is useful for validating all values.',
        'syntax': 'array.every(item => item > 0);',
        'example': 'const numbers = [1, 2, 3];\nconsole.log(numbers.every(n => n > 0));',
        'lines': '- It returns true only if every element passes.'
    },
    '27.Reduce.md': {
        'title': 'reduce()',
        'definition': 'reduce() combines array elements into one value.',
        'why': 'It is helpful for totals and aggregations.',
        'syntax': 'array.reduce((acc, item) => acc + item, 0);',
        'example': 'const numbers = [1, 2, 3];\nconst total = numbers.reduce((sum, n) => sum + n, 0);\nconsole.log(total);',
        'lines': '- The accumulator stores the running result.'
    },
    '28.Destructuring.md': {
        'title': 'Destructuring',
        'definition': 'Destructuring lets us unpack values from arrays or objects into variables.',
        'why': 'It makes code shorter and easier to read.',
        'syntax': 'const { name } = user;',
        'example': 'const user = { name: "Rahul", age: 25 };\nconst { name } = user;\nconsole.log(name);',
        'lines': '- Values are extracted into separate variables.'
    },
    '29.SpreadOperator.md': {
        'title': 'Spread Operator',
        'definition': 'The spread operator ... expands values from an array or object.',
        'why': 'It is useful for copying and combining values.',
        'syntax': 'const newArray = [...arr1, ...arr2];',
        'example': 'const a = [1, 2];\nconst b = [3, 4];\nconst c = [...a, ...b];\nconsole.log(c);',
        'lines': '- The elements are copied into a new array.'
    },
    '30.RestOperator.md': {
        'title': 'Rest Operator',
        'definition': 'The rest operator ... collects the remaining values into an array.',
        'why': 'It is useful when a function accepts many arguments.',
        'syntax': 'function sum(...numbers) {\n    return numbers.reduce((a, b) => a + b, 0);\n}',
        'example': 'function sum(...numbers) {\n    return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3));',
        'lines': '- ...numbers collects all arguments into one array.'
    },
    '31.Modules.md': {
        'title': 'Modules',
        'definition': 'Modules let us split code into separate files and reuse it in other files.',
        'why': 'They keep code organized and maintainable.',
        'syntax': 'export function add(a, b) { return a + b; }',
        'example': 'export function add(a, b) {\n    return a + b;\n}',
        'lines': '- export makes the function available to other files.'
    },
    '32.Promises.md': {
        'title': 'Promises',
        'definition': 'Promises handle asynchronous work such as timers, API calls, and file operations.',
        'why': 'They make async code easier to read and manage than nested callbacks.',
        'syntax': 'const promise = new Promise((resolve, reject) => { resolve("Done"); });',
        'example': 'const promise = new Promise((resolve, reject) => {\n    resolve("Done");\n});\npromise.then(result => console.log(result));',
        'lines': '- resolve() marks the promise as successful.\n- .then() runs on success.'
    }
}

for path in files:
    data = mapping.get(path.name, {
        'title': path.stem,
        'definition': 'This topic is part of JavaScript learning.',
        'why': 'It is introduced to make code easier to understand.',
        'syntax': 'Example syntax here;',
        'example': 'Example code here;',
        'lines': '- Explain the main idea here.'
    })
    content = f'''# 🟦 {data['title']}

---

## 📖 Definition

{data['definition']}

---

## ❓ Why it was introduced

{data['why']}

---

## ✍️ Syntax

```javascript
{data['syntax']}
```

---

## 💻 Code Example

```javascript
{data['example']}
```

---

## 🧩 Line-by-line Explanation

{data['lines']}

---

## 🔑 Key Points

- Keep the concept simple and easy to understand.
- Use it in real code examples.
- Practice it until the syntax feels natural.

---

## ⚠️ Common Mistakes

- Forgetting the correct syntax.
- Mixing up similar concepts.
- Not practicing enough with small examples.

---

## ✅ Best Practices

- Write small examples first.
- Read the code slowly and line by line.
- Compare similar concepts to understand the difference.

---

## 🌍 Real-world Use Cases

- Used in everyday JavaScript development.
- Helps with code readability and maintainability.
- Useful for interview preparation and practical projects.

---

## ❓ Interview Questions

1. What is this concept used for?
2. What is the basic syntax?
3. How does it work in real code?
4. What are the common mistakes to avoid?

---

## 📝 Practice Exercises

1. Write a small example using this concept.
2. Try the same example with a different value.
3. Explain the code in your own words.

---

## 📌 Summary

This topic is an important part of JavaScript learning and should be practiced regularly.
'''
    path.write_text(content, encoding='utf-8')

print(f'Updated {len(files)} note files.')
