function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'Imagens/morning_round_pp.jpg' /*Bom dia!*/
        document.body.style.background = '#e2c99f'
    }
    else if (hora >= 12 && hora <= 18) {
        imagem.src = 'Imagens/afternoon_round_pp.jpg' /*Boa Tarde!*/
        document.body.style.background = '#ea761c'
    }
    else {
        imagem.src = 'Imagens/night_round_pp.jpg' /*Boa Noite!*/
        document.body.style.background = '#6f4c6d'
    }
}
