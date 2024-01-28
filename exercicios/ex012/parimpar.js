function parImpar() {
    let num = Number(window.prompt('Digite um número:'))
    let saida = document.getElementById('resultado')
    if ( num % 2 == 0) {
        saida.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`
    } else {
        saida.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`
    }
}