function contagem() {
    let numero = Number(document.getElementById('fnum').value)
    let saida = document.getElementById('resultado')
    saida. innerHTML += `<h2>Contando de 0 até ${numero}</h2>`
    let c = 0
    while(c <= numero){
        saida.innerHTML += ` ${c} &#x1F449;`
        c++
    }
    saida.innerHTML += ` &#x1F3C1;`
}