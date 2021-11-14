let num = [5, 2, 8, 9, 3]
num.push(1) 
num.sort()
/*Se o num.push(1) for posto aqui, primeiro serão agrupados os números (em ordem crescente) e depois será adicionado o número 1.*/
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
for(let pos = 0; pos < num.length; pos++) {console.log(num[pos])}
let pos = num.indexOf(9)
if (pos == -1) {console.log(`O valor digitado não foi encontrado.`)}
else {console.log(`O valor está na posição ${pos}.`)}