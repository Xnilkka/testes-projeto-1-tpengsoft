import { classifyTriangle } from './triangle.js';

export function formatReport(a, b, c) {
  const type = classifyTriangle(a, b, c);
  
  if (type === 'invalid') {
    return 'Erro: As medidas fornecidas não formam um triângulo válido.';
  }
  
  return `O triângulo com lados ${a}, ${b} e ${c} é classificado como: ${type}.`;
}