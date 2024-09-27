var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var space=' ';
var peca1=lines.shift().split(space);
var peca2=lines.shift().split(space);

var cod1=parseInt(peca1.shift());
var qtde1=parseInt(peca1.shift());
var valor1=parseFloat(peca1.shift());

var cod2=parseInt(peca2.shift());
var qtde2=parseInt(peca2.shift());
var valor2=parseFloat(peca2.shift());

var soma=(qtde1*valor1)+(qtde2*valor2);

console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`);
