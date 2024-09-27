var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N=parseInt(lines.shift());

var horas=N/3600;
N=N%3600;

var minutos=N/60;
N=N%60;

var segundos=N;

console.log(`${Math.floor(horas)}:${Math.floor(minutos)}:${Math.floor(segundos)}`);
