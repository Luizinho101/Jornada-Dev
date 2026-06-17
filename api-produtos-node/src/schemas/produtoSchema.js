
const produtoSchema = {
    type: "object",
    properties: {
        nome: { type: "string", minLength: 3 },
        descricao: { type: "string" },
        numeracao: { type: "integer", minimum: 10, maximum: 50 } 
    },
    required: ["nome", "numeracao"], 
    additionalProperties: false 
};

module.exports = produtoSchema;