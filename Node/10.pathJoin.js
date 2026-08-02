import path from "path";
import { fileURLToPath } from "url";

const ___filename=fileURLToPath(import.meta.url);
const ___dirname=path.dirname(___filename);
console.log(___dirname);

const filePath = path.join(___dirname, "data", "products", "products.json");
console.log(filePath);
