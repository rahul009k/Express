import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderpath = path.join(__dirname, "DATA");

const result= await fs.readdir(folderpath);
console.log(result);
console.log(result.length);


const jsonFiles=result.filter(x=>x.endsWith(".json"));
console.log(jsonFiles);
const txtFiles=result.filter(x=>x.endsWith(".txt"));
console.log(txtFiles);
for (const file of result) {
    const fileName = path.basename(file, path.extname(file));
    console.log(fileName);
}

