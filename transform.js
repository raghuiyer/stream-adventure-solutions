var through2 = require("through2");
var stream = through2(function(chunk, encoding, callback) {
  this.push(chunk.toString().toUpperCase());
  callback();
}, function(cb) {
  cb();
});

process.stdin.pipe(stream).pipe(process.stdout);
