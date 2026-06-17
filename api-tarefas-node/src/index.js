const express = require('express');
const listaRoutes = require('./routes/listaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', listaRoutes);

app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`  Servidor rodando com sucesso na porta ${PORT} `);
    console.log(`  Acesse: http://localhost:${PORT}/api/lista  `);
    console.log(`=============================================`);
});