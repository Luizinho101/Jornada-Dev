const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routesProdutos = require('./routes/routesProdutos');


const swaggerDocs = require('../swagger.json'); 

const app = express();


app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/api', routesProdutos);

module.exports = app;