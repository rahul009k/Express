// const createUser = function(name, age) {
//     return {
//         name: name,
//         age: age
//     };
// };

const createUser =(name,age)=>({
    name: name,
        age: age
});
console.log(createUser("rahul",26));



// const createPoint = function(x, y) {
//     return {
//         x: x,
//         y: y
//     };
const createPoint =(x,y)=>({
    x:x,
    y:y
})
console.log(createPoint(8,9));

// };const createProduct = function(id, price) {
//     return {
//         id: id,
//         price: price
//     };
// };
// const createProduct =(id,price)=>({
//      id: id,
//         price: price
// })

const createProduct = (id, price) => ({
    id,
    price
});
console.log(createProduct(1,100));
