var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a=parseInt(lines.shift()); //número funcionário
var b=parseInt(lines.shift()); //quantidade de horas trabalhadas
var c=parseFloat(lines.shift()); //valor hora
var salary=parseFloat(lines.shift());

salary=b*c;

console.log("NUMBER = "+a);
console.log("SALARY = U$ "+salary.toFixed(2));
