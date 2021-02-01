"use strict";
const fs = require("fs");
const readline = require("readline");
const { Readable } = require("stream");

(async function () {
  const robots = fs.createWriteStream("robots.txt");
  robots.write("User-agent: *\n");

  const readme_internal = new Readable();
  readme_internal._read = () => {};
  const toc = [];

  const template_reader = readline.createInterface({ input: fs.createReadStream("template.md") });
  for await (const line of template_reader) {
    if (line.endsWith(".html")) {
      readme_internal.push(`\`\`\`html\n${fs.readFileSync(line)}\`\`\`\n[${line}](${line})\n`);
      robots.write(`Disallow: /${line}\n`);
    } else if (line.startsWith("##")) {
      toc.push([line.replace("## ", ""), line.replace("## ", "").replaceAll(" ", "-").toLowerCase()]);
      readme_internal.push(`${line}\n`);
    } else {
      readme_internal.push(`${line}\n`);
    }
  }
  template_reader.close();
  robots.close();

  const readme = fs.createWriteStream("README.md");
  const ir_reader = readline.createInterface({ input: readme_internal });
  for await (const line of ir_reader) {
    if (line === "TOC") {
      readme.write(toc.map((item) => `- [${item[0]}](#${item[1]})`).join("\n") + "\n\n<hr>\n");
    } else {
      readme.write(`${line}\n`);
    }
  }
  ir_reader.close();
  readme.close();
})();
