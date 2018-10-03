//


// 1. task
const hello = require('./hello.js');


// 2.
// const ansi = require('ansi');
// const cursor = ansi(process.stdout);
// cursor.beep();


// 3.
const aJoke = require('give-me-a-joke');

aJoke.getRandomDadJoke(function(joke) {
  console.log(joke);
});

aJoke.getRandomCNJoke(function(joke) {
  console.log(joke);
});