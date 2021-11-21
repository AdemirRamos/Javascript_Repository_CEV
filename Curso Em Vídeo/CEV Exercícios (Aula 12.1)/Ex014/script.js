function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'morning_round_pp.png' /*Bom dia!*/
        document.body.style.background = '#d87f01'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'afternoon_round_pp.png' /*Boa Tarde!*/
        document.body.style.background = '#ea761c'
    }
    else {
        img.src = 'night_round_pp.png' /*Boa Noite!*/
        document.body.style.background = '#6f4c6d'
    }
}
