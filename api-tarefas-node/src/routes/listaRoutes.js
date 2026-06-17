const express = require('express');
const router = express.Router();
const listaController = require('../controllers/listaController');

router.get('/lista', listaController.getAllLista);
router.get('/lista/:id', listaController.getListaById);
router.post('/lista', listaController.createLista);
router.put('/lista/:id', listaController.updateLista);
router.delete('/lista/:id', listaController.deleteLista);

module.exports = router;