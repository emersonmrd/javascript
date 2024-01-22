function tabuar() {
    let number = document.getElementById('inumero');
    let tnum = Number(number.value);
    let res = document.getElementById('res');

    // Limpa o conteúdo atual antes de adicionar a nova tabuada
    res.innerHTML = '';

    if (!isNaN(tnum)) { // Verifica se tnum é um número
        res.innerHTML = '<h3>TABUADA</h3>';
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('p');
            item.innerHTML = `${tnum} x ${c} = ${tnum * c}`;
            item.id = `tp${c}`;
            res.appendChild(item);

            // Adiciona a classe 'lightgray' ou 'darkgray' para alternar as cores
            if (c % 2 === 0) {
                item.classList.add('lightgray');
            } else {
                item.classList.add('darkgray');
            }
        }
    } else {
        window.alert('Por favor, insira um número válido.');
    }
}