const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf-8');
const lines = data.split('\n').length;
console.log(lines - 1);