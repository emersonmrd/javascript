function contar() {
    let saida = document.getElementById('resultado')
    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for(let c = 1; c <= 10; c++){
        saida.innerHTML += `${c}&#x1F449;`
    }
    saida.innerHTML += `&#x1F3C1;`
}