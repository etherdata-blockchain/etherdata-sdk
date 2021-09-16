const sdkMain = require('../package.json');
const { readdirSync, readFileSync, writeFileSync, existsSync } = require('fs');
const path = require('path');
const prettier = require('prettier');
const { exec } = require('child_process');

const sdkPath = 'sdk-dist';
const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const sdkPaths = getDirectories(sdkPath).map((d) =>
  path.join(sdkPath, d, 'package.json')
);
for (let p of sdkPaths) {
  if (existsSync(p)) {
    console.log(`Writting ${p}'s version'`);
    let fileContent = readFileSync(p);
    let jsonContent = JSON.parse(fileContent);
    jsonContent.version = sdkMain.version;
    let newData = prettier.format(JSON.stringify(jsonContent), {
      parser: 'json',
    });
    // write
    writeFileSync(p, newData);
  } else {
    console.error("Cannot write version. Package.json doesn't exist.");
  }
}

exec('git add .');
exec(`git commit -m \"update sdk-dist version\"`);
