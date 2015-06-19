var http = require("http"),
  through2 = require("through2"),
  trumpet = require("trumpet");

var tr = trumpet();

var stream = tr.select(".loud").createStream();

stream.pipe(through2(function(chunk, encoding, cb){
  this.push(chunk.toString().toUpperCase());
  cb();
}, function(cb) {
  cb();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout)

