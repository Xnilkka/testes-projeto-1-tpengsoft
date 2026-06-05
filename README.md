# 🧮 Projeto 1: Suíte de Testes Computacionais (Calculadora & Triângulos)

Repositório dedicado à primeira atividade prática da disciplina de **Tópicos Especiais em Engenharia de Software** do curso de Ciência da Computação na **UEPB (2026.1)**.

---

## 🛠️ Tecnologias e Ferramentas


* **Runtime:** [Node.js](https://nodejs.org/) (LTS v20+)
* **Engine de Testes:** [Vitest](https://vitest.dev/)
* **Qualidade de Código:** [ESLint](https://eslint.org/)
* **Formatação:** [Prettier](https://prettier.io/)
* **Histórico:** Git & GitHub com mensagens de commits semânticos.

---

## 📂 Estrutura Modular do Projeto

```text
src/
├── soma/
│   ├── sum.js
│   └── sum.test.js
├── subtracao/
│   ├── sub.js
│   └── sub.test.js
├── multiplicacao/
│   ├── mul.js
│   └── mul.test.js
├── divisao/
│   ├── div.js
│   └── div.test.js
└── triangulo/
    ├── triangle.js
    ├── triangle.test.js
    ├── report.js
    └── report.test.js
```

---

## ⚙️ Funcionalidades Implementadas

### 1. Módulo Calculadora
* **Operações Simples:** Suporte a operações matemáticas básicas (`Adição`, `Subtração`, `Multiplicação`, `Divisão`).
* **Operações com Listas:** Funções dinâmicas utilizando `reduce` para processar arrays de números (`sumList`, `subList`, `mulList`, `divList`).
* **Tratamento de Exceções:** Bloqueio e disparo de erros para cenários matemáticos inválidos, como a divisão por zero.

### 2. Módulo Triângulo
* **Classificação Lógica:** Identificação precisa baseada na desigualdade triangular, retornando `equilateral`, `isosceles`, `scalene` ou `invalid`.
* **Geração de Relatórios:** Um módulo integrado que consome a classificação e gera strings formatadas de feedback para o utilizador final.

---
