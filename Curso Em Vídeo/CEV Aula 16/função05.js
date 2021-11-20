function fatorial (n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}

//Recursividade ocorre quando uma função chama a si própria.

console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1 == 120. - 5 fatorial.
//5 == 4!. - "4!" == 4 fatorial.
//4! ==  4 x 3 x 2 x 1.
//n! == n x (n-1)!. - Essa é a fórmula para se encontrar o fatorial de um número.
//1! == 1. - Esse é o fatorial de 1.