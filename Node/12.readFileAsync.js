import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filePath=path.join(__dirname,"DATA","users.txt")

const file=await fs.readFile(filePath,"utf8")
console.log(file);
const list=file.split("\n").map(name=>name.trim()).filter(Boolean);
console.log(list);

