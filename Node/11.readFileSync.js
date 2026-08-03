import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filePath=path.join(__dirname,"DATA","users.txt")

const user=   fs.readFileSync(filePath,"utf8");
console.log(user);
