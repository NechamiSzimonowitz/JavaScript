const args = process.argv.slice(2);
const numbers = args.map(arg => Number(arg));

const sum = numbers.reduce((total, num) => total + num);

console.log(sum);
