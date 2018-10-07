//


const fs = require('fs');


// readFileSync to synchronous execution otherwise asynchronous
fs.readFile('./package-lock.json', (err, data) => {
  err ? console.error(err) : console.log(data.toString());
});

// const data = fs.readFileSync('./package.json');
// console.log(data.toString());

console.log('What would spitted out first: this or whats in readFile inside?')