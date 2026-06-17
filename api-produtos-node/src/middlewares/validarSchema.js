const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true }); 
addFormats(ajv); 

const validarSchema = (schema) => {
    const validate = ajv.compile(schema);
    
    return (req, res, next) => {
        const valido = validate(req.body);
        
        if (!valido) {
            const erros = validate.errors.map(err => ({
                campo: err.instancePath.replace('/', ''),
                mensagem: err.message
            }));
            return res.status(400).json({ error: "Dados inválidos", detalhes: erros });
        }
        next(); 
    };
};

module.exports = validarSchema;