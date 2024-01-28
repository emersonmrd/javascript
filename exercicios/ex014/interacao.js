function clicou(){
    let dataAtual = new Date()
    let saida = document.getElementById('resultado')

    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${dataAtual}</mark></p>`
}