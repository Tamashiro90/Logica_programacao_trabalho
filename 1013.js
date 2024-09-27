var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores=lines.shift().split(' ');

var a=parseInt(valores.shift());
var b=parseInt(valores.shift());
var c=parseInt(valores.shift());

var maiorAB=(a+b+Math.abs(a-b))/2;
var maiorABC=(maiorAB+c+Math.abs(maiorAB-c))/2;

console.log(`${maiorABC} eh o maior`);
