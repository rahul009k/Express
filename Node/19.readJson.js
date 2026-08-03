import { log } from "console";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderpath = path.join(__dirname, "Data","users.json");
 
const jsonResult= await fs.readFile(folderpath,"utf8");
log(jsonResult);
const result =JSON.parse(jsonResult);
log(result)
log(result)
