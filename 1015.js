var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores1=lines.shift().split(' ');
var valores2=lines.shift().split(' ');

var x1=parseFloat(valores1.shift());
var y1=parseFloat(valores1.shift());

var x2=parseFloat(valores2.shift());
var y2=parseFloat(valores2.shift());

var distancia=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log(distancia.toFixed(4));
