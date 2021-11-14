let valores = [1, 0, 6, 8, 7, 9]
console.log(valores)
/*valores.sort()
for(let pos = 0; pos < valores.length; pos++)
{console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)}*/
//As duas linhas de códigos acima se chamam "percurso para exibição de vetores".
//Abaixo vemos a maneira simplificada de se realizar o mesmo procedimento.

//for(let pos in valores) {console.log(valores[pos])}
for (let pos in valores) {console.log(`A posição ${pos} tem o valor ${valores[pos]}`)}