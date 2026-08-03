import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const students=("rahul \n Rohan \n Mohan  ");

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filePath=path.join(__dirname,"DATA","Students.txt")


await fs.writeFile(filePath,students);
console.log("File created successfully");

