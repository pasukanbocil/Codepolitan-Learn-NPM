const jokes = require("give-me-a-joke");

const color = require("chalk-rainbow");

const cowsay = require("cowsay");

console.log(
  color(
    cowsay.say({
      text: "i'm a FTYB",
      e: "oO",
      T: "U ",
    })
  )
);
jokes.getRandomDadJoke(function (joke) {
  console.log(color("Dad Joke: " + joke));
});
