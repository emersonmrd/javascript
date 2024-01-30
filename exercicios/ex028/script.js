function calcular(){

    let saida = document.getElementById('resultado')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c
        c--
    }
     saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}

