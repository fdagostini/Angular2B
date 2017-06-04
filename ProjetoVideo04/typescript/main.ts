var minhaVar = 'Minha variavel';

 function minhaFuncao(x, y){
     return x + y;
 }

//ES6
 let num = 2;
 const PI = 3.14;
 var numeros = [1,2,3];
 numeros.map(function(valor){
     return valor * 2;     
 });

 numeros.map(valor => valor *2); //ESCRITO EM ES6

// Criando uma classe

 class Matematica{
     soma(x, y){
         return x + y;
     }
 }

 // Tipando uma variável
 var n1: string = 'texto'

 // Se você não quer definir o tipo da sua variável, a deixa em branco
 // ou use o any
var n2: any = 'texto'
n2 = 4; // não haverá erro compilação, pois não foi declarado o tipo da variável


