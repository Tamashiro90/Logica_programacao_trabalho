var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var km=parseInt(lines.shift());

var tempo=km*2;

console.log(`${tempo} minutos`);
