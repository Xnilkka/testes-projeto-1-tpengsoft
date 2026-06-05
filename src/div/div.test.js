import { describe, it, expect } from 'vitest';
import { div, divList } from './div.js';

describe('Testes da função div()', () => {
  it('divide dois números inteiros com resultado exato', () => {
    expect(div(10, 2)).toBe(5);
  });

  it('lança um erro ao tentar dividir por zero', () => {
    expect(() => div(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});

describe('Testes da função divList()', () => {
  it('divide uma lista de números em sequência', () => {
    expect(divList([100, 2, 5])).toBe(10);
  });

  it('lança um erro se houver um zero na lista para dividir', () => {
    expect(() => divList([100, 0, 2])).toThrow("Divisão por zero não é permitida");
  });
});