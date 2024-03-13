// const rumus = require("./rumus");
const cats = require("./cats");

const { penjumlahan, PI, luas, keliling } = require("./rumus");

const jokes = require("give-me-a-joke");

const color = require("chalk-rainbow");

jokes.getRandomDadJoke(function (joke) {
  console.log(color("Dad Joke: " + joke));
});

console.log(cats);
console.log(penjumlahan(1, 2));
console.log(PI);
console.log(luas(10, 5));
console.log(keliling(7));
