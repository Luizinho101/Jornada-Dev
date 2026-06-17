const express = require('express');
const routesProdutos = require('./routes/routesProdutos');

const app = express();

app.use(express.json());

app.use('/api', routesProdutos);

module.exports = app;