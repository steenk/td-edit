#!/usr/bin/env node
// build script
const fs = require('fs');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

console.log('Built td-edit into "dist".');

