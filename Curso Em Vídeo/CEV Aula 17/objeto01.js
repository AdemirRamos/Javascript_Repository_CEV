let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0)
    {console.log('Engordou!')
    this.peso += p}}
    

//console.log(typeof amigo)
//O código acima mostra o tipo da minha variável "amigo".

//console.log(amigo)
//A linha de código acima escreve o objeto "amigo".

amigo.engordar(2)
//Essa linha de código faz com que o "amigo" "engorde" dois quilos.

console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)
//Já essa liha de código escreve "nome" (relacionado e) vindo do objeto "amigo" e também o "peso" (também vindo de "amigo").
