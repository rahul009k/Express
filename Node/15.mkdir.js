import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderpath = path.join(__dirname, "Logs");
// try {
//   await fs.mkdir(folderpath);
//   console.log("Logs folder created successfully.");
// } catch (error) {
//   if (error.code === "EEXIST") {
//     console.log("Folder already exists.");
//   } else console.error("Error:", error);
// }

await fs.mkdir(folderpath, { recursive: true });
  console.log("Logs folder created successfully.");
