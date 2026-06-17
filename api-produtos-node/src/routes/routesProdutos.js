const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

const validarSchema = require('../middlewares/validarSchema');
const produtoSchema = require('../schemas/produtoSchema');

router.post('/produtos', validarSchema(produtoSchema), produtosController.createProduto);
router.put('/produtos/:id', validarSchema(produtoSchema), produtosController.updateProduto);

router.get('/produtos', produtosController.getProdutos);
router.delete('/produtos/:id', produtosController.deleteProduto);

module.exports = router;