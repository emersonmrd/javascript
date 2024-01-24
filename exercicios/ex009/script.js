let cliques = 0
let res = document.querySelector('section#res')

function clicou () {
    cliques++
    res.innerHTML = `<p>O contador está com <mark>${cliques}</mark> cliques.</p>`
}

function zeraContagem () {
    cliques = 0
    res.innerHTML = null
}