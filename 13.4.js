const target = Math.floor(Math.random() * 100) + 1;

let guess = 50;
let low = 1;
let high = 100;
let guesses = 0;

while (guess !== target) {
  guesses++;

  if (guess < target) {
    console.log(`${guess} was too low.`);
    low = guess + 1;
  } else {
    console.log(`${guess} was too high.`);
    high = guess - 1;
  }

  guess = Math.floor((low + high) / 2);
}

guesses++;
console.log(`Found it! The target was ${target}.`);
console.log(`It took ${guesses} guess${guesses === 1 ? "" : "es"}.`);