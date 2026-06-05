import { describe, it, expect } from 'vitest';
import { classifyTriangle } from './triangle.js';

describe('Testes Unitários - Classificação de Triângulos', () => {
  //Nível: Unitário, porque estamos testando uma única função.
  //Visão: Caixa Preta, pois estamos focando apenas nas entradas  e saídas esperadas, testando como usuário e sem se preocupar com os detalhes de implementação.

  it('deve retornar "equilateral" para três lados iguais', () => {
    expect(classifyTriangle(3, 3, 3)).toBe('equilateral');
  });

  it('deve retornar "isosceles" para dois lados iguais', () => {
    expect(classifyTriangle(5, 5, 3)).toBe('isosceles');
  });

  it('deve retornar "scalene" para três lados diferentes', () => {
    expect(classifyTriangle(3, 4, 5)).toBe('scalene');
  });

  it('deve retornar "invalid" para lados que não formam um triângulo', () => {
    expect(classifyTriangle(1, 2, 5)).toBe('invalid');
    expect(classifyTriangle(0, 4, 5)).toBe('invalid');
  });
});