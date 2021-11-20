function par_ou_impar (número) { //"(n)" é chamado de "parâmetro formal".
    if (número % 2 == 0) {
        return 'Par.' //Seja esse "return", ou o de baixo, um dos dois vai retornar um valor para a chamada ["par_ou_impar()"].
    }
    else { //É possível se ter mais de um "return" em uma função, contanto que somente um deles seja executado.
        return 'Ímpar.'
    }
} //Tudo dentro do bloco representado por essa chave, é chamado de "ação".

let resultado = par_ou_impar(4) //O número entre parênteses é chamado de "parâmetro real".
//Uma opção, para não usar uma variável, seria: "console.log(parouimpar(4))."
console.log(resultado) //Agora, após passar pela função, "resultado" tem o valor "Ímpar".

//JS é uma linguagem de programação que também funciona sob o paradigma funcional, ou seja, JS também é uma linguagem funcional.
//Porém, JS também é uma linguagem multiparadigma.
//Toda função pode possuir os seguintes elementos: uma chamada; um conjunto de parâmetros; uma ação; um retorno.
//Nem toda função vai apresentar todos os elementos listados acima.
//Funções: funções são ações executadas assim que são chamadas ou em decorrência de algum evento.
//Uma função pode receber parâmetros e retornar um resultado.
