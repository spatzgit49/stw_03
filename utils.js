const operators = ['+', '-', '*', '/', '%'];

export function clear() {
  return '';
}

export function deleteLast(expression) {
  return expression.slice(0, -1);
}

export function appendValue(expression, value) {
  const lastCharacter = expression.at(-1);
  if (operators.includes(value) && (!expression || operators.includes(lastCharacter))) {
    return expression ? expression.slice(0, -1) + value : value === '-' ? value : expression;
  }
  if (value === '.' && expression.split(/[+\-*/%]/).at(-1).includes('.')) return expression;
  return expression + value;
}

export function calculate(expression) {
  if (!expression || operators.includes(expression.at(-1))) return expression;
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    return Number.isFinite(result) ? String(Number(result.toFixed(10))) : 'Error';
  } catch {
    return 'Error';
  }
}
