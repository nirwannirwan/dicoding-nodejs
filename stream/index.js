const fs = require("fs");

const readableStream = fs.createReadStream(__dirname + "/input.txt", {
  highWaterMark: 15
});

const writeableStream = fs.createWriteStream(__dirname + "/output.txt");

readableStream.on("readable", () => {
  try {
    console.log("writing...");
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log("Error reading data");
  }
});

readableStream.on("end", () => {
  console.log("End of file");
  writeableStream.end();
});
