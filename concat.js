var concat = require("concat-stream");

var c = concat(function(chunk){
   process.stdout.write(chunk.toString().split('').reverse().join(''));
});

process.stdin.pipe(c);