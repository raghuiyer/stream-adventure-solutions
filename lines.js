var split = require('split'),
    through2 = require("through2")
    count = 1;

process.stdin
  .pipe(split())
  .pipe(through2(function(chunk, encoding, callback){
    var txChunk = count % 2 === 1 ? chunk.toString().toLowerCase() : chunk.toString().toUpperCase() 
    this.push(txChunk + "\n");
    count ++;
    callback();
  }, function(callback){
    callback();
  })).pipe(process.stdout);