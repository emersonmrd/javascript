function calculaIdade() {
    let dataAtual = new Date()
    let ano = dataAtual.getFullYear()
    let anoNasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - anoNasc
    let saida = document.getElementById('resultado')

    saida.innerHTML = `<p>Quem nasceu em ${anoNasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}