
import { log } from "console";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderpath = path.join(__dirname, "Data","users2.json");
const users = [
    {
        id: 1,
        name: "Rahul",
        city: "Hyderabad"
    },
    {
        id: 2,
        name: "Virat",
        city: "Mumbai"
    }
];

const json= JSON.stringify(users);
await fs.writeFile(folderpath,json);

console.log(typeof users);
console.log(typeof json);