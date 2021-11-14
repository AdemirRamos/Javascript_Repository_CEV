function verificar()
{var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('div#res')
/*var res = document.querySelector('div#resultado')*/

if (fano.value.length == 0 ||Number(fano.value) > ano)
    {window.alert('Erro! Verifique os dados informados e tente novamente.')}

else
    /*{window.alert('Tudo ok!')*/
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    /*res.innerHTML = `Idade calculada: ${idade}.`*/
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {gênero = 'Homem'
        if (idade >= 0 && idade < 10)
        {/*criança*/ img.setAttribute('src', 'bebemenino.png')}
        else if (idade >= 10 && idade < 21)
        {/*Jovem*/ img.setAttribute('src', 'homemjovem.png')}
        else if (idade < 50)
        {/*Adulto*/ img.setAttribute('src', 'homemadulto.png')}
        else
        {/*Idoso*/ img.setAttribute('src', 'homemvelho.png')}}

    else if (fsex[1].checked) {gênero = 'Mulher'
        if (idade >= 0 && idade < 10)
        {/*criança*/ img.setAttribute('src', 'bebemenina.png')}
        else if (idade >= 10 && idade < 21)
        {/*Jovem*/ img.setAttribute('src', 'mulherjovem.png')}
        else if (idade < 50)
        {/*Adulto*/ img.setAttribute('src', 'mulheradulta.png')}
        else
        {/*Idoso*/ img.setAttribute('src', 'mulhervelha.png')}}

    {res.style.textAlign = 'center'
    res.innerHTML = `Detectamos gênero como ${gênero} com ${idade} anos.`
    res.appendChild(img)}}