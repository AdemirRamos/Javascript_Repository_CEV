//Em vetores no JS, você pode misturar diferentes tipos primitivos dentro de um mesmo vetor.
//Por exemplo: "v = [nome: 'Ademir', idade: 25, cidade: 'são paulo', function falar() {}]".
//Em JS, os índices dos vetores sempre serão fixos como números. Eles não podem ser mudados.
//A declaração de objetos, em JS, é feita com chaves: {}.
//No caso dos objetos, os índices podem receber nomes.
//Objeto {nome: 'Ademir'} -> 'Ademir' -> atributo do objeto "nome".
//Objetos podem guardar funcionalidades (funções). A isso, se dá o nome de "método".

let amigo2 = []
let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar (p = 0) {
    console.log(amigo) //Nos mostra o nosso objeto (no terminal).
    console.log('Engordou!')
    this.peso += p} //Esse "this" é uma palavra autoreferência ao objto. | peso += p == peso + p.
}
console.log(typeof amigo) //Nos diz o tipo primitivo do item selecionado (nesse caso, temos o objeto "amigo".)
console.log(typeof amigo2) //Nesse caso, mesmo se tratando de um vetor, o resultado será "objeto", pois, em JS, vetores são objetos.

//Vetores e objetos serem ambos objetos se devem ao fato de que, basicamente, ambos são estruturas da mesma classe, estruturas que tiveram a mesma origem.

amigo.engordar(2)
//Essa linha de código faz com que o "amigo" 'engorde' dois quilos - seguindo a mesma lógica das funções combinadas com parâmetros.

console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)
//Para selecionar o valor de um elemento de um objeto, digite o nome do objeto mais ponto e o elemento buscado para receber o seu valor.
//Exemplo: "amigo.nome" (como no código acima).

//P. S.: A versão mais recente da ECMA Script permite a criação de classes para se replicar objetos com as mesmas características.
//O comentário acima foi escrito em 20/11/2021.