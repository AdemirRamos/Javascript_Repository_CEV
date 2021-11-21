function contar() {
    let ínicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (ínicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'É impossível contar pois faltam dados. Por favor, preencha todos os campos.'
        //window.alert('Erro! Faltam dados.')
    }
    else {
        resultado.innerHTML = 'Contando: <br>'
        let ini = Number(ínicio.value)
        let end = Number(fim.value)
        let pas = Number(passo.value)
        if (pas <= 0) {
            window.alert('Passo invávlido. Considerando Passo = 1.')
            pas = 1   
        }
        if (ini < end) { //Contagem crescente.
            for (let c = ini; c <= end; c += pas) {
                resultado.innerHTML += ` ${c} \u{1F449}` //Emojis tirados da "Emoji List", funcionam dessa maneira (à esquerda) em JS.
            }
        }
        else { //Contagem regressiva.
            for (let c = ini; c >= end; c -= pas) {
                resultado.innerHTML += `${c} \u{1F449}` //Esses códigos de emojis, em JS, só funcionam entre crases.
            }
        }   resultado.innerHTML += `\u{1F3C1}`
    }
}
