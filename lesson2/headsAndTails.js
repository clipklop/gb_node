// Heads and Tails game on NodeJS. Two sides of the same coin.


const rl = require('readline').createInterface(process.stdin, process.stdout);


const randInt = function() {
  return Math.round(Math.random());
}

rl.question('Heads or Tails. Please choose one side of the same coin: 1 or 0: ', (answer) => {
  let rand = parseInt(answer);
  // TODO logic
  rand === randInt() ? console.log("Yay, Heads! You've won!") : console.log("Tails :( Better luck next time.");
  rl.close();
});
