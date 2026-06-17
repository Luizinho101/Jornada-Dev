
let banco = {};

function createItem(id, dados) {
    if (!id || typeof id !== "string") {
        console.error("ID inválido. Deve ser uma string não vazia.");
        return;
    }
    if (banco[id]) {
        console.error(`O item com ID '${id}' já existe.`);
        return;
    }
    banco[id] = { ...dados };
    console.log(`Item '${id}' criado com sucesso.`);
}


function readItem(id) {
    if (!banco[id]) {
        console.warn(`Item com ID '${id}' não encontrado.`);
        return null;
    }
    return { ...banco[id] }; 
}

function updateItem(id, novosDados) {
    if (!banco[id]) {
        console.error(`Não é possível atualizar. Item '${id}' não existe.`);
        return;
    }
    banco[id] = { ...banco[id], ...novosDados };
    console.log(`Item '${id}' atualizado com sucesso.`);
}


function deleteItem(id) {
    if (!banco[id]) {
        console.error(`Não é possível deletar. Item '${id}' não existe.`);
        return;
    }
    delete banco[id];
    console.log(`Item '${id}' removido com sucesso.`);
}



createItem("001", { nome: "João", idade: 25 });
createItem("002", { nome: "Maria", idade: 30 });

console.log("Lendo item 001:", readItem("001"));

updateItem("001", { idade: 26, cidade: "São Paulo" });
console.log("Após atualização:", readItem("001"));

deleteItem("002");
console.log("Banco final:", banco);