var agora = new Date()
var hora = agora.getHours()
//Os dois comandos acima são necessários para se capturar a hora do sistema.
//Além de "getHours()", esse método também tem outras possibilidades. Basta digitar "get" e visualizá-las.
//A hora capturada vai ser determinada com base no sistema no qual o "script" está sendo executado.
//Se o "script" está sendo executado através do cliente, a hora mostrada será a do sistema do cliente - o mesmo vale para o servidor.

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
