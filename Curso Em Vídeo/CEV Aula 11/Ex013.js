var agora = new Date()
var dds = agora.getDay()
//dds == dia da semana.
console.log(`Hoje é ${dds}.`)
switch(dds)
    {case 0: console.log('Domingo.')
        break
    case 1: console.log('Segunda-feira.')
        break
    case 2: console.log('Terça-feira.')
        break
    case 3: console.log('Quarta-feria.')
        break
    case 4: console.log('Quinta-feira.')
        break
    case 5: console.log('Sexta-feira.')
        break
    case 6: console.log('Sábado.')
        break
    default: console.log('Dia inexistente.')
        break}