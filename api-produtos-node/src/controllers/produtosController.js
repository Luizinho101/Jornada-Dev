let produtos = {};
let Id = 1;

const getProdutos = (req, res) => {
    res.json(Object.values(produtos));
};

const createProduto = (req, res) => {
    try {
        const { nome, descricao, numeracao } = req.body;
        const id = Id++;
        produtos[id] = { id, nome, descricao, numeracao };

        res.status(201).json(produtos[id]);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno ao criar o produto.' });
    }
};

const updateProduto = (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (!produtos[id]) {
            return res.status(404).json({ error: 'Produto não encontrado!' });
        }
        const { nome, descricao, numeracao } = req.body;
        produtos[id] = { id, nome, descricao, numeracao };
        res.json(produtos[id]);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno ao atualizar o produto.' });
    }
};

const deleteProduto = (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (!produtos[id]) {
            return res.status(404).json({ error: 'Produto não encontrado!' });
        }

        delete produtos[id];
        return res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro interno ao deletar o produto.' });
    }
};

module.exports = {
    getProdutos,
    createProduto,
    updateProduto,
    deleteProduto
};