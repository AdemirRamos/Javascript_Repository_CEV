function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //"getFullYear" coletará a data com os quatro digitos.
    var formulário_ano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (formulário_ano.value.length == 0 || formulário_ano.value > ano) {
        window.alert('Verifique se você digitou todos os dados e tente novamente.')
        //O segundo teste lógico poderia ser escrito: "Number(formulário_ano.value) > ano".
    }
    else if (formulário_ano == ano) {
        'Idade Calculada: 0 anos de idade.'
    }
    else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(formulário_ano.value)
        //resultado.innerHTML = `Idade Calculada: ${idade} anos de idade.`
        var gênero = ''
        var imagem = document.createElement('img') //Criando um elemento do tipo imagem.
        imagem.setAttribute('id', 'foto') //Criando um "id" para a var imagem e o renomeando.
        if (sexo[0].checked) { //Tradução dessa linha: se o sexo marcado for masculino.
            gênero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                imagem.setAttribute('src', 'Imagens/baby_boy_round_pp.png')
            }
            else if (idade <= 20) {
                imagem.setAttribute('src', 'Imagens/boy_round_pp.png') 
            }
            else if (idade <= 50) {
                imagem.setAttribute('src', 'Imagens/man_round_pp.png')
            }
            else {
                imagem.setAttribute('src', 'Imagens/old_man_round_pp.png')
            }
        }
        if (sexo[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                imagem.setAttribute('src', 'Imagens/baby_girl_round_pp.png')
            }
            else if (idade <= 20) {
                imagem.setAttribute('src', 'Imagens/girl_round_pp.png')
            }
            else if (idade <= 50) {
                imagem.setAttribute('src', 'Imagens/woman_round_pp.png')
            }
            else {
                imagem.setAttribute('src', 'Imagens/old_woman_round_pp.png')
            }
        }
        resultado.innerHTML = `O gênero detectado foi "${gênero}" e a idade foi: "${idade}".`
        resultado.style.textAlign = 'center'
        resultado.appendChild(imagem) //Assim se cria a foto e a adiciona através do JS.
        imagem.style.marginTop = '15px'
    }
}
