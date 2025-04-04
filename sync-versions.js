const fs = require('fs');
const path = require('path');

const newVersion = process.argv[2];

const targets = [
  'package.json',
  'client/package.json',
  'server/package.json',
];

targets.forEach((file) => {
  const fullPath = path.resolve(__dirname, '..', file);
  const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  content.version = newVersion;
  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');
  console.log(`✅ Updated ${file} to version ${newVersion}`);
});