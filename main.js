const form = document.querySelector('#prime-form');
const startInput = document.querySelector('#start');
const endInput = document.querySelector('#end');
const message = document.querySelector('#message');
const results = document.querySelector('#results');
const resultTitle = document.querySelector('#result-title');
const primeList = document.querySelector('#prime-list');

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let divisor = 3; divisor * divisor <= number; divisor += 2) {
    if (number % divisor === 0) return false;
  }

  return true;
}

function findPrimes(start, end) {
  const primes = [];
  for (let number = Math.max(2, start); number <= end; number += 1) {
    if (isPrime(number)) primes.push(number);
  }
  return primes;
}

function showError(text) {
  message.textContent = text;
  message.classList.add('error');
  results.hidden = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';
  message.classList.remove('error');

  if (startInput.value === '' || endInput.value === '') {
    showError('Please enter a number in both fields.');
    return;
  }

  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    showError('Please enter whole numbers in both fields.');
    return;
  }
  if (start < 0 || end < 0) {
    showError('Please enter numbers that are zero or greater.');
    return;
  }
  if (start > end) {
    showError('The initial number must be less than or equal to the final number.');
    return;
  }
  if (end - start > 1_000_000) {
    showError('Please choose a range of one million numbers or fewer.');
    return;
  }

  const primes = findPrimes(start, end);
  results.hidden = false;
  resultTitle.textContent = primes.length
    ? `${primes.length} prime number${primes.length === 1 ? '' : 's'} found`
    : 'No prime numbers found';
  primeList.replaceChildren();

  if (primes.length) {
    const fragment = document.createDocumentFragment();
    primes.forEach((prime) => {
      const item = document.createElement('span');
      item.textContent = prime;
      fragment.append(item);
    });
    primeList.append(fragment);
  } else {
    primeList.textContent = `There are no prime numbers between ${start} and ${end}.`;
  }
});
