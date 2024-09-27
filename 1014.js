var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X=parseInt(lines.shift());
var Y=parseFloat(lines.shift());

var media=X/Y;

console.log(`${media.toFixed(3)} km/l`);
