#!/usr/bin/env node
// build script
const { exec } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

exec("npx webpack", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec("npx lessc --clean-css='--s1 --advanced --compatibility=ie8' less/main.less dist/tdedit.style.css", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

let index = `<!doctype html>
<html lang="en">
	<head>
		<title>td-edit</title>
		<meta charset="utf-8"></meta>
		<link rel="stylesheet" type="text/css" href="tdedit.style.css"></link>
    	<script src="tdedit.bundle.js"></script>
	</head>
	<body>
		<div class="td-rich-editor" />
	</body>
</html>`;
fs.writeFile('dist/index.html', index, (err) => {
	if (err) throw err;
})

console.log('Built td-edit into "dist".');

