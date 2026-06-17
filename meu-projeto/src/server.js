// src/server.js
import app from './app.js';

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORTA}!`);
});