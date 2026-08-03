import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filePath=path.join(__dirname,"DATA","students.txt")

const file=await fs.readFile(filePath,"utf8")

await fs.appendFile(filePath,"\nVirat")
console.log("Added New student");
