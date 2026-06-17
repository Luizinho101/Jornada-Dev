
// src/app.js
import express from 'express';
// Importamos as rotas do produto
import rotasProduto from './routes/produto.routes.js';

const app = express();

app.use(express.json());

// Dizemos para o Express usar as rotas do produto
app.use(rotasProduto);

app.get('/', (req, res) => {
  return res.json({ mensagem: "Nosso e-commerce está online!" });
});

export default app;