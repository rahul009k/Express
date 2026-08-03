import users from "./services/userService.js"

// const userById = await users.getUserById(1);
// console.log(userById);
// await users.addUser("rohan","Gujrat");

// await users.updateUser(4, " Kohli", "Bangalore")
const deteteUser=await users.deleteUser(4);
console.log(deteteUser);
console.log("user deleted");


const userlist =await users.getUsers();
console.log(userlist);
