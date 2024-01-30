function contar() {
    let saida = document.getElementById('resultado')
    saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    for(let c = 1; c <= 10; c++){
        if (c % 2 == 0 ) {
        saida.innerHTML += ` ${c} &#x1F449;`
        } 
    }
    saida.innerHTML += ` &#x1F3C1;`
}