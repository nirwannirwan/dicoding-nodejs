const fs = require("fs");

const data = fs.readFileSync("./filesystem/notes.txt", "UTF-8");
console.log(data);
