"use strict";
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("template.md"),
});

const readme = fs.createWriteStream("README.md");
const robots = fs.createWriteStream("robots.txt");
robots.write("User-agent: *\n");

rl.on("line", (line) => {
  if (line.endsWith(".html")) {
    readme.write(`\`\`\`html\n${fs.readFileSync(line)}\`\`\`\n[${line}](${line})\n`);
    robots.write(`Disallow: /${line}\n`);
  } else {
    readme.write(`${line}\n`);
  }
});
