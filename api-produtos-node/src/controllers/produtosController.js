let produtos = {};
let Id = 1;

const getProdutos = (req, res) => {
    res.json(Object.values(produtos));
};

const createProduto = (req, res) => {
    try {
        const { nome, descricao, numeracao } = req.body;

        if (typeof nome !== 'string' || typeof numeracao === 'undefined') {
            return res.status(400).json({ error: 'Campos "nome" (string) e "numeração" são obrigatórios.' });
        }

        const id = Id++;
        produtos[id] = { id, nome, descricao, numeracao };

        res.status(201).json(produtos[id]);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const updateProduto = (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!produtos[id]) {
        return res.status(404).json({ error: 'Produto não encontrado!' });
    }

    const { nome, descricao, numeracao } = req.body;

    if (typeof nome !== 'string' || typeof numeracao === 'undefined') {
        return res.status(400).json({ error: 'Campos "nome" (string) e "numeração" são obrigatórios.' });
    }

    produtos[id] = { id, nome, descricao, numeracao };
    res.json(produtos[id]);
};

const deleteProduto = (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!produtos[id]) {
        return res.status(404).json({ error: 'Produto não encontrado!' });
    }

    delete produtos[id];
    return res.status(204).send();
};


module.exports = {
    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
};