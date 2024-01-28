function analisar() {
    let dataAtual = new Date
    let dia = dataAtual.getDate()
    let mes = dataAtual.getMonth()
    let options = { month: 'long'}
    let dataFormatada = new Date(dataAtual.getFullYear(), mes, dia)
    let nomeMesCompleto = dataFormatada.toLocaleString('pt-BR', options)
    let nomeMesAbreviado = nomeMesCompleto.slice(0, 3)
    nomeMesAbreviado = nomeMesAbreviado.charAt(0).toUpperCase() + nomeMesAbreviado.slice(1)
    let ano = dataAtual.getFullYear()
    let optionsDiaSemana = { weekday: 'long' }
    let nomeDiaSemana = dataFormatada.toLocaleString('pt-BR', optionsDiaSemana)
    nomeDiaSemana = nomeDiaSemana.charAt(0).toUpperCase() + nomeDiaSemana.slice(1);
    let nomeSemAbreviado = nomeDiaSemana.slice(0,3)
    let hora = dataAtual.getHours()
    let min = dataAtual.getMinutes()
    let sec = dataAtual.getSeconds()
    let saida = document.getElementById('resultado')

    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${nomeMesAbreviado}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${nomeSemAbreviado}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`
}