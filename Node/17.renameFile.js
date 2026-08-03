import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldpath =  path.join(__dirname, "DATA","StudentsData.txt");
const newpath = path.join(__dirname, "Logs","Students.txt");

    await fs.rename(oldpath,newpath);
console.log("File renamed successfully.");

