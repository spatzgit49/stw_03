import { appendValue, calculate, clear, deleteLast } from './utils.js';

const display = document.querySelector('#display');
const keypad = document.querySelector('.keypad');
let expression = '';

function updateDisplay() {
  display.textContent = expression || '0';
}

function handleInput(value) {
  expression = appendValue(expression, value);
  updateDisplay();
}

keypad.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const { action, value } = button.dataset;
  if (action === 'clear') expression = clear();
  else if (action === 'delete') expression = deleteLast(expression);
  else if (action === 'calculate') expression = calculate(expression);
  else handleInput(value);
  updateDisplay();
});

document.addEventListener('keydown', (event) => {
  const key = event.key === 'Enter' ? '=' : event.key;
  if (/^[0-9.+\-*/%]$/.test(key)) {
    event.preventDefault();
    if (key === '=') expression = calculate(expression);
    else handleInput(key);
  } else if (key === 'Escape') expression = clear();
  else if (key === 'Backspace') expression = deleteLast(expression);
  else return;
  updateDisplay();
});
