var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo=parseInt(lines.shift());
var velMedia=parseInt(lines.shift());

var litros=(tempo*velMedia)/12;

console.log(litros.toFixed(3));
