var idade = 67
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16) {console.log ('Você não vota.')}
else if (idade >= 16 && idade < 18) {console.log('O seu voto opcional.')}
else if (idade > 18 && idade < 67) {console.log('Você vota (obrigatoriamente).')}
else if (idade >= 67) {console.log('O seu voto é opcional.')}