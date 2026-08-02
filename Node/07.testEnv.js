import dotenv from "dotenv";
dotenv.config({
    path:".env.test",
        override: true

});

console.log(process.env.PORT+" "+
process.env.USERNAME+" "+
process.env.COURSE)