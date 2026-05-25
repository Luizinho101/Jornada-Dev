
const titulo = document.getElementById('titulo')
const botao = document.getElementById('botao')

botao.addEventListener("click", () => {
    titulo.innerText = "Texto alterado com JavaScript"
})