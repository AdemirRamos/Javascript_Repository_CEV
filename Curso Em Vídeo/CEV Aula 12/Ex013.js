var agora = new Date()
var dds = agora.getDay()
//dds == dia da semana.
//Os comando acima não retornaram o nome do dia da semana, eles retornaram um número correspondente ao dia.

console.log(`Hoje é ${dds}.`)

switch(dds) {
    case 0:
        console.log('Domingo.')
        break

    case 1:
        console.log('Segunda-feira.')
        break

    case 2:
        console.log('Terça-feira.')
        break

    case 3:
        console.log('Quarta-feria.')
        break

    case 4:
        console.log('Quinta-feira.')
        break

    case 5:
        console.log('Sexta-feira.')
        break

    case 6:
        console.log('Sábado.')
        break

    default:
        console.log('Dia inexistente.')
        break
}

/*O "Switch Case" é uma "Condição Múltipla". Esse tipo de condição é muito útil para valores fixos.*/
/*Estrutura do "Switch Case":

Switch (expressão) {
    case valor 0: comando
        break
    case valor 1: comando
        break
    case valor 2: comando
        break
    default: comando
        break (esse "break" é opcional).
}*/

/*Exceto pelo "break" de "default", todos os outros são obrigatórios.*/

/*Exemplo de execução: caso a expressão resulte em "2", o Switch executará o comando do "case valor 2" (e parará por conta do "break").*/
/*Caso cada "case" não tenha um "break", os comando de cada valor serão executados até que o programa ache um "break".*/
//O Switch não funciona com intervalos. Ele só funcionam com números inteiros e/ou com "strings" (caracteres).