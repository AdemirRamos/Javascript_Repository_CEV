function somar(número1, número2) {
    return número1 + número2
}

console.log(somar(6, 7))

function soma (n1 = 0, n2 = 0) {
    return n1 + n2
}
//Caso um desses parâmetros não receba um número na chamada da função, esse parâmetro receberá 0 como valor.
//À ocorrência de n1 e n2 (os parâmetros da função) recebendo 0, se dá o nome de "parâmetros pré-definidos" ou "parâmetros opicionais".

//"n1 / n2 = 0" corrije o erro de digitar só um número.
//A função possui dois parâmetros formais, se só um parâmetro real for passado para ela, ocorrerá um erro.
//Caso a ocorrência descrita na linha acima aconteça, o resultado será "NaN (not a number)".
console.log(soma(2))