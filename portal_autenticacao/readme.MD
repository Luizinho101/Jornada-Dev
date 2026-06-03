# 🚀 Desafio Técnico #01: Portal de Autenticação "Jornada Dev"

## 📑 Contexto
A empresa **Jornada Dev** precisa de uma interface de login moderna e responsiva para sua plataforma. Como desenvolvedor do time, sua missão é criar o front-end dessa tela, garantindo uma estrutura semântica, design atraente e uma lógica de captura de dados limpa.

---

## 🛠 Requisitos Funcionais

### 1. Estrutura (HTML)
- [ ] O projeto deve conter obrigatoriamente as tags semânticas: `<header>`, `<main>`, `<footer>` e `<form>`.
- [ ] O formulário deve conter campos de `E-mail` e `Senha`.
- [ ] O botão de submissão deve ser obrigatoriamente do tipo `submit`.
- [ ] O footer deve exibir o ano atual (estático ou via JS).

### 2. Estilização (CSS)
- [ ] **Posicionamento:** O card de login deve estar **perfeitamente centralizado** na tela (horizontal e verticalmente).
- [ ] **Sticky Footer:** O footer deve permanecer no final da página, independentemente do volume de conteúdo, sem sobrepor o card.
- [ ] **UI/UX:**
    - Utilizar Variáveis CSS (`--primary-color`, etc) para fácil manutenção.
    - Implementar estados de `:focus` nos inputs para acessibilidade.
    - Implementar estado de `:hover` no botão de ação.
- [ ] **Responsividade:** O card deve ser adaptável para dispositivos móveis (sugestão: largura de 90% em telas pequenas).

### 3. Lógica (JavaScript)
- [ ] **Prevenção:** Impedir o recarregamento da página ao submeter o formulário (`preventDefault`).
- [ ] **Captura de Dados:** Utilizar padrões modernos (como `FormData` ou desestruturação) para ler os campos.
- [ ] **Validação:** Exibir os dados no `console.log` apenas se os campos estiverem preenchidos.
- [ ] **Escrita:** Utilizar **Arrow Functions** e as palavras-chave `const`/`let` (evitar `var`).

---

## 📝 Critérios de Avaliação

| Critério | O que será avaliado |
| :--- | :--- |
| **Semântica** | Uso correto de tags estruturais em vez de apenas `<div>`. |
| **Centralização** | Domínio de Flexbox ou CSS Grid. |
| **Clean Code** | Variáveis com nomes claros e funções bem estruturadas. |
| **Estética** | Escolha de cores, harmonia de espaçamentos e bordas. |

---

## 📤 Entrega Esperada
O projeto deve ser composto por:
1. `index.html`
2. `style.css`
3. `script.js`

