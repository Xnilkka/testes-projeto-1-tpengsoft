import { describe, it, expect } from 'vitest';
import { mul, mulList } from './mul.js';

describe('Testes da função mul()', () => {
  it('multiplica dois números positivos', () => {
    expect(mul(4, 3)).toBe(12);
  });

  it('multiplica qualquer número por zero resultando em zero', () => {
    expect(mul(5, 0)).toBe(0);
  });
});

describe('Testes da função mulList()', () => {
  it('multiplica uma lista de números corretamente', () => {
    expect(mulList([2, 3, 4])).toBe(24);
  });
});