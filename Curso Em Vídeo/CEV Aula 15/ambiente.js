var num = [5, 2, 8, 9, 3] //Primeira maneira de se declarar uma variável composta ("array"/vetor). 
num.push(1) //".push()" adiciona um valor ao vetor (sempre na última posição).
num.sort() //".sort()" organiza os elementos do vetor. Se forem números, em ordem decrescente; se forem palavras, em ordem alfabética.
num.length //".length" nos diz o tamanho do vetor, isso é, quantos elementos estão contidos no vetor analisado.
/*Em JS, "length" não é um método, mas sim um atributo.*/
//Caso o método "sort" venha antes do método "push", primeiro o vertor será organizado, depois o valor de "push" será adicionado ao vetor.
//O que resultará em um vetor com um elemento fora de ordem.

/*Chaves ("key"): são os índices das variáveis compostas. Exemplo: document.write(num[0]) -> escreva o conteúdo da var num do índice 0.*/
/*Vetores são compostos por elementos: o elemento de um vetor é um par que agrupa um espaço na memória, o valor dentro dele e o índice.*/
/*Conteúdo dos elementos: [0, 1, 2] -> elementos; [0, 1, 2] -> números (conteúdo / valor dos elementos).*/
/*P. S.: As vírgulas definem e separam os elementos dentro de um vetor.*/
/*Variáveis Compostas são variáveis com vários elementos. Cada elemento é composto por seu valor e uma chave de indentificação.*/
/*Caso você seja escrito "console.log(num)", o resultado obtido será (sem "sort"): "[5, 2, 8, 9, 3, 1]".*/
/*Para adicionar valores ao vetor, basta fazer isso: num[3] = 6. Resultado (sem "sort"): "[5, 2, 8, 6, 3, 1]".*/
/*Para adicionar valores e aumentar o tamanho do vetor, basta fazer isso: num[6] = 9. Resultado (sem "sort"): "[5, 2, 8, 6, 3, 1, 9]".*/

console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é "${num[0]}".`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(9) //O método "indexOf()" procura por valores dentro de um vetor. 
if (pos == -1) { //Caso o valor não esteja no vetor, será retornado "-1".
    console.log(`O valor digitado não foi encontrado.`)
}
else {
    console.log(`O valor está na posição ${pos}.`)
}

//Variáveis Simples só conseguem armazenar um valor por vez.
//Variáveis Compostas são capazes de armazenar vários valores em uma mesma estrutura.
