var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio=parseFloat(lines.shift());

var volume=(4/3.0)*3.14159*(raio*raio*raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);
