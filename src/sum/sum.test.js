import { describe, it, expect } from 'vitest';

import { sum, sumList } from './sum.js'; 

describe('Testes da função sum()', () => {
  it('soma dois números positivos', () => {

    const a = 2, b = 3;
    expect(sum(a,b)).toBe(5);
  });

  it('soma um número positivo grande com um número negativo', () => {
    expect(sum(10000, -2)).toBe(9998);
  });

  it('soma zero com zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('soma até o limite máximo de inteiros seguros no JS', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  it('soma até o limite mínimo de inteiros seguros (negativos) no JS', () => {
    expect(sum(-Number.MAX_SAFE_INTEGER, -1)).toBe(-Number.MAX_SAFE_INTEGER - 1);
  });


  
});

describe('Testes da função sumList()', () => {

  it('soma uma lista de números corretamente', () => {
    expect(sumList([1, 2, 3, 4, 5])).toBe(15);
  });

  it('garante que a soma da lista não retorne um valor incorreto (teste negativo)', () => {
    expect(sumList([1, 2, 3, 4, 5])).not.toBe(10);
  });

});