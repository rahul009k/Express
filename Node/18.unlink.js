import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const newpath = path.join(__dirname, "Logs","Students.txt");
 await fs.unlink(newpath);
 console.log("File deleted successfully.");
 