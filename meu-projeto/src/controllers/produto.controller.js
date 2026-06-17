// src/controllers/produto.controller.js

// Esse será o nosso "Banco de Dados" temporário.
// Enquanto o servidor estiver ligado, tudo o que salvarmos vai ficar aqui.
let produtos = [];

export const cadastrarProduto = (req, res) => {
  const { nome, preco, estoque } = req.body;

  // Criamos o objeto do produto e geramos um ID para ele (com base no tamanho do array)
  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco,
    estoque
  };

  // Guardamos o produto dentro do nosso "banco de dados" fake
  produtos.push(novoProduto);

  // Devolvemos uma resposta de sucesso mostrando o banco atualizado
  return res.status(201).json({
    mensagem: "Produto cadastrado com sucesso!",
    produto: novoProduto,
    todosOsProdutos: produtos // Mostra a lista completa para vermos crescendo
  });
};

export const listarProdutos = (req, res) => {
  // O Controller simplesmente pega o array da memória e envia de volta
  return res.status(200).json(produtos);
};