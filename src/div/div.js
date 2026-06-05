export function div(a, b) { 
  if (b === 0) throw new Error("Divisão por zero não é permitida");
  return a / b; 
}

export function divList(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => {
    if (curr === 0) throw new Error("Divisão por zero não é permitida");
    return acc / curr;
  });
}