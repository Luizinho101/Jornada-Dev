

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const senhaInput = document.getElementById('senha').value;

    const pessoas = [
        { nome: "Ana", email: "ana@email.com", senha: "12345" },
        { nome: "Bruno", email: "bruno@email.com", senha: "4563" },
        { nome: "Carla", email: "carla@email.com", senha: "38576" }
    ];

    if (emailInput.trim() !== "" || senhaInput.trim() !== "") {
        const usuarioEncontrado = pessoas.find(p => p.email === emailInput && p.senha === senhaInput);

        if (usuarioEncontrado) {
            const container = document.querySelector('.container-login');
            container.innerHTML = ""
            const mensagem = document.createElement('p');
            mensagem.textContent = `Bem-vindo, ${usuarioEncontrado.nome}!`;
            mensagem.style.color = "green";
            mensagem.style.fontWeight = "bold";

            container.appendChild(mensagem);
        } else {
            alert('Usuário ou senha incorretos.');
        }

    }else{
        alert("Insira usuário e senha")
    }
});