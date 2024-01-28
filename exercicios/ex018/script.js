let resultado = document.getElementById('resultado')
let computador = 0
let jogador = 0

function sorteio() {
    let min = 1
    let max = 100
    let diferenca = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(diferenca * aleatorio)
}

function inicio () {
    let jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (computador > jogador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong></p>`
    } else if (computador < jogador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR!</strong></p>`
    } else if (computador == jogador) {
        resultado.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
    }
}