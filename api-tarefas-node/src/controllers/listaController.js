let lista = {};
let currentId = 1;

const createLista = (req, res) => {
    try {
        const { title } = req.body;

        if (typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ error: 'O campo "title" (string) é obrigatório.' });
        }

        const id = currentId++;
        lista[id] = { 
            id, 
            title: title.trim(), 
            completed: false 
        };

        return res.status(201).json(lista[id]);
    } catch (err) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const getAllLista = (req, res) => {
    return res.json(Object.values(lista));
};

const getListaById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (!lista[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    
    return res.json(lista[id]);
};

const updateLista = (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (!lista[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    const { title, completed } = req.body;
    
    if (typeof title !== 'string' || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Os campos "title" (string) e "completed" (boolean) são obrigatórios.' });
    }

    lista[id] = { id, title: title.trim(), completed };
    return res.json(lista[id]);
};

const deleteLista = (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (!lista[id]) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    delete lista[id];
    return res.status(204).send();
};

module.exports = {
    createLista,
    getAllLista,
    getListaById,
    updateLista,
    deleteLista
};