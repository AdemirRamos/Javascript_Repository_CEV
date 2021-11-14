function fatorial (n)
{if (n == 1) {return 1}
else {n * fatorial(n-1)}}
//O nome da linha de código acima é "recurssividade".

console.log(fatorial(5))

/* 5! = 5 x 4 x 3 x 2 x 1 == 120.
5 == 4!
4! ==  4 x 3 x 2 x 1.
n! == n x (n-1)!
1! == 1.*/ 