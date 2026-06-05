import { describe, it, expect } from 'vitest';
import { formatReport } from './report.js';

describe('Testes de Integração - Relatório do Triângulo', () => {
  // Nível: Integração
  // Não é unitário pq a função formatReport depende da função classifyTriangle, ou seja, testa a junção de dois módulos.

  it('deve retornar a string formatada corretamente para um triângulo válido', () => {
    const resultado = formatReport(3, 3, 3);
    expect(resultado).toBe('O triângulo com lados 3, 3 e 3 é classificado como: equilateral.');
  });

  it('deve retornar a mensagem de erro formatada para medidas inválidas', () => {
    const resultado = formatReport(0, 4, 5);
    expect(resultado).toBe('Erro: As medidas fornecidas não formam um triângulo válido.');
  });
});