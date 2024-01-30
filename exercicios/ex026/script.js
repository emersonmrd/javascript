function contagem(){
    let saida = document.getElementById('resultado')
    let numeroI = Number(document.getElementById('inum').value)
    let numeroF = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de ${numeroI} até ${numeroF}</h2>`

    if (numeroI === numeroF) {
         saida.innerHTML += `<p>Não é possível contar, pois os números são iguais &#x1F3C1;</p>`
         
    } else if (numeroF > numeroI){
        for(let c = numeroI; c<=numeroF; c++){
            saida.innerHTML += ` ${c} &#x1F449;`
        }
        saida.innerHTML += ` &#x1F3C1;`
    } else {
        let c = numeroI
        while(c >= numeroF){
            saida.innerHTML += ` ${c} &#x1F449;`
            c--
        }
        saida.innerHTML += ` &#x1F3C1;`
    }
}