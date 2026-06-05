import { describe, it, expect } from 'vitest';
import { sub, subList } from './sub.js';

describe('Testes da função sub()', () => {
  it('subtrai dois números positivos', () => {
    expect(sub(10, 4)).toBe(6);
  });

  it('subtrai resultando em um número negativo', () => {
    expect(sub(3, 10)).toBe(-7);
  });
});

describe('Testes da função subList()', () => {
  it('subtrai uma lista de números em sequência', () => {
    expect(subList([20, 5, 3])).toBe(12);
  });
});