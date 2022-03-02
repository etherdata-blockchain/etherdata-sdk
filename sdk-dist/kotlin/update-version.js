const fs = require("fs");

const filePath = "sdk-dist/kotlin/build.gradle";
const version = process.argv[2];

const oldContents = fs.readFileSync(filePath, "utf8");

const lines = oldContents.split("\n");
const index = lines.findIndex((l) => l.includes("version ="));
lines[index] = `version = '${version}'`;
let newContent = "";
for (let line of lines) {
    if (line.length > 0) {
        newContent += line + "\n";
    }
}
fs.writeFileSync(filePath, newContent);
