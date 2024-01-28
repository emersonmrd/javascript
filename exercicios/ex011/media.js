function calculaMedia () {
    let aluno = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${aluno}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${aluno}?`))
    let media = (n1 + n2) / 2
    let saida = document.getElementById('resultado')
    if (media >= 6) {
        saida.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>.</p>`
        saida.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}.</mark></p>`
        saida.innerHTML += `<p>A média final será <mark>${media}.</mark></p>`
        saida.innerHTML += `<p>A mensagem que temos é: <strong class="red">Meus parabens!</strong></p>`
        
    } else {
        saida.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>.</p>`
        saida.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}.</mark></p>`
        saida.innerHTML += `<p>A média final será <mark>${media}.</mark></p>`
        saida.innerHTML += `<p>A mensagem que temos é: <strong class="red">Estude um pouco mais!</strong></p>`
    }
}