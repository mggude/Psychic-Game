var wins = 0;
var losses = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesRemaining = 9;

// computer picks a random letter

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(letters);

// user guesses letters until they pick the computer's choice

// game resets