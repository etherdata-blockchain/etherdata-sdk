const { exec } = require("child_process");

const version = process.argv[2];
exec(`node sdk-dist/kotlin/update-version.js ${version}`);
exec(`node sdk-dist/python/update-version.js ${version}`);
