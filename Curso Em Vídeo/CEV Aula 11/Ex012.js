var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora > 19 && hora < 24) {
    console.log('Boa noite!')
}

else if (hora < 19 && hora >= 12) {
    console.log('Boa tarde!')
}

else {
    console.log('Bom dia!')
}