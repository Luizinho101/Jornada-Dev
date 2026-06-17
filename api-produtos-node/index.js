const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let produtos = {}
let Id = 1;

app.get('/lista', ( req , res) => {
    res.json(Object.values(produtos))
})

app.post('/lista', (req, res) => {

       try {
        const {nome , descricao , numeracao} = req.body;

        if (typeof nome !== 'string' || typeof numeracao === 'undefined') {
            return res.status(400).json({ error: 'Campos "nome" (string) e "numeração" são obrigatórios.' });
        }

        const id = Id++;
        produtos[id] = { id, nome, descricao, numeracao };

        res.status(201).json(produtos[id]);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
})

app.put('/lista/:id', (req , res) => {
    const id = parseInt(req.params.id, 10);

    const {nome , descricao , numeracao } = req.body;

    if(!produtos[id]){
        return res.status(400).json({error: 'Item não encontrado !'})
    }

    produtos[id] = {id, nome, descricao , numeracao};
    res.json(produtos[id]);
})

app.delete('/lista/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!produtos[id]) {
        return res.status(404).json({ error: 'Produto não encontrado!' });
    }
    delete produtos[id];
    return res.status(204).send();
});

app.listen( PORT , () =>    {
    console.log(`Servidor rodando em http://localhost:${PORT}/lista`);
})