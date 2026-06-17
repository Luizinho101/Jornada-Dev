// src/routes/produto.routes.js
import { Router } from 'express';
// Importamos as duas funções agora:
import { cadastrarProduto, listarProdutos } from '../controllers/produto.controller.js';

const rotasProduto = Router();

// Rota antiga de cadastro (POST)
rotasProduto.post('/produtos', cadastrarProduto);

// NOVA ROTA: Quando o cliente pedir um GET em "/produtos"
rotasProduto.get('/produtos', listarProdutos);

export default rotasProduto;