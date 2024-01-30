function contar () {
    let saida = document.getElementById('resultado')
    saida.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    for(let c = 10; c >=1; c--) {
        saida.innerHTML += ` ${c} &#x1F449;`
    }
    saida.innerHTML += ` &#x1F3C1;`
}

