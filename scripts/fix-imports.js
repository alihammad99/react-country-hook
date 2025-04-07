const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");

// Read the minified index file
const indexMinPath = path.join(buildDir, "index.min.js");
let indexContent = fs.readFileSync(indexMinPath, "utf8");

// Replace the import statement
indexContent = indexContent.replace(
  /require\("\.\/data"\)/g,
  'require("./data.min")'
);

// Write the updated content back
fs.writeFileSync(indexMinPath, indexContent);

console.log("Fixed imports in minified files");
