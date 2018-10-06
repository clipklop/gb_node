//


const rl = require('readline');


function randInt() {
  return Math.floor((Math.random() * 1) + 1);
}

rl.question('Heads and Tails. Two sides of the same coin.', answer => {
  let rand = parseInt(answer);
  // TODO logic
  rl.close();
});
