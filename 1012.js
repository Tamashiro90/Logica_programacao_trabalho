var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores=lines.shift().split(' ');

var A=parseFloat(valores.shift());
var B=parseFloat(valores.shift());
var C=parseFloat(valores.shift());

var triangulo=(A*C)/2;
var circulo=(C*C)*3.14159;
var trapezio=((A+B)*C)/2;
var quadrado=B*B;
var retangulo=A*B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
