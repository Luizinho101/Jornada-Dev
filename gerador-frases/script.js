async function gerarFrase() {

    let frase = "Não foi possível carregar a frase.";

    try {
        const resposta = await fetch('frases.json');
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        

        const indiceAleatorio = Math.floor(Math.random() * dados.length);
        
 
        frase = `"${dados[indiceAleatorio].frase}" — ${dados[indiceAleatorio].autor}`;
        
        console.log("Resultado: " + frase);
        
    } catch (error) {
        console.error("Erro ao buscar frase:", error);
    }

    
    document.getElementById('resposta').innerHTML = frase;
}
