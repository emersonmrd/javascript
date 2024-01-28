function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function geraNumero() {
    let numeroAleatorio = gerarNumeroAleatorio(1, 100)
    let saida = document.getElementById('resultado')

     saida.innerHTML += `<p>Acabei de pensar no número <mark>${numeroAleatorio}</mark>!</p>`
}

function Limpar() {
    let saida = document.getElementById('resultado');
    saida.textContent = '';
}