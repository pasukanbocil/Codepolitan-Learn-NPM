const jokes = require("give-me-a-joke");

const color = require("chalk-rainbow");

jokes.getRandomDadJoke(function (joke) {
  console.log(color("Dad Joke: " + joke));
});

// jokes.getRandomCNJoke(function (joke) {
//   console.log(color("Chuck Norris Joke: " + joke));
// });
