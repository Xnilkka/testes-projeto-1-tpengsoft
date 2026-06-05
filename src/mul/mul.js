export function mul(a, b) { 
  return a * b; 
}

export function mulList(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc * curr);
}