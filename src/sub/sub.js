export function sub(a, b) { 
  return a - b; 
}

export function subList(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc - curr);
}