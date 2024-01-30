function tabuar () {
    let saida = document.getElementById('resultado')
    let numT = Number(document.getElementById('tnum').value)
    saida.innerHTML = ''
    saida.innerHTML += `<h2>Tabuada de ${numT}</h2>`

    let c = 1
    while( c <= 10){
        saida.innerHTML += `${numT} x ${c} = <strong>${numT*c}</strong> <br>`
        c++
    }
}