// process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinSymbols = ['|', '/', '-', '\\', '|', '/', '-', '\n']
let timer = 0;
for (let symbol of spinSymbols) {
  timer += 100;
  setTimeout(() => {
  process.stdout.write(`\r${symbol}`);
}, timer);
} 
