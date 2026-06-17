const app = require('./src/app'); 
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`  Servidor rodando com sucesso na porta ${PORT} `);
    console.log(`  Acesse: http://localhost:${PORT}/api/produtos `);
    console.log(`=============================================`);
});