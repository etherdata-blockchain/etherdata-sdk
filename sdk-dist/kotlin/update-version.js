module.exports.readVersion = function (contents) {
  const line = contents.split("\n").find((l) => l.includes("version ="));
  const items = line.split("=");
  return items[1];
};

module.exports.writeVersion = function (contents, version) {
  const lines = contents.split("\n");
  const index = lines.findIndex((l) => l.includes("version ="));
  lines[index] = `version = 'v${version}'`;
  return lines.join("\r\n");
};
