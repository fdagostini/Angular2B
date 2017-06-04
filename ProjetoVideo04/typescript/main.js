var minhaVar = 'Minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
//ES6
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ESCRITO EM ES6
// Criando uma classe
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Tipando uma variável
var n1 = 'texto';
// Se você não quer definir o tipo da sua variável, a deixa em branco
// ou use o any
var n2 = 'texto';
n2 = 4; // não haverá erro compilação, pois não foi declarado o tipo da variável
