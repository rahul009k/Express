import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __fileName = fileURLToPath(import.meta.url);
const __dir = path.dirname(__fileName);
const jsonPath = path.join(__dir, "..", "DATA", "users.json");

async function getUsers() {
  return JSON.parse(await fs.readFile(jsonPath, "utf8"));
}
async function getUserById(id) {
  const users = await getUsers();
  const user = users.find((user) => user.id === id);
  return user ?? null;
}
async function addUser( name, city ) {
  const users = await getUsers();
  const Ids = users.map((user) => user.id);
  const id = Math.max(...Ids) ?? 0;
 const newUser = {
  id: id + 1,
  name,
  city,
};
  users.push(newUser);  
await fs.writeFile(jsonPath,JSON.stringify(users,null,2));
}

async function updateUser(id, name, city) {
    const users = await getUsers();
    const user = users.find(user => user.id === id);

    if (!user) {
        return null;
    }

    user.name = name ?? user.name;
    user.city = city ?? user.city;

    await fs.writeFile(
        jsonPath,
        JSON.stringify(users, null, 2),
        "utf8"
    );

    return user;
}
async function deleteUser(id)
{
    const users = await getUsers();
    const index = users.findIndex(user => user.id === id);
    if(index===-1)
        return null;

    const deletedUser =users.splice(index,1)[0];
    await fs.writeFile(jsonPath,JSON.stringify(users,null,2),"utf8");
    return deletedUser;
}

const userData = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};

export default userData;
