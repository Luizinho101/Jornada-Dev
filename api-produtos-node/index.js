const express = require('express');

const app = express();
const PORT = 3000;

let produtos = {}
let id = 1;

app.get('/lista', ( req , res) => {
    res.json({ msg : 'iniciado com sucesso'})
})

app.listen( PORT , () =>    {
    console.log(`Servidor rodando em http://localhost:${PORT}/lista`);
})