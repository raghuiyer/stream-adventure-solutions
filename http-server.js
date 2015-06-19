var http = require("http"),
  through2 = require("through2");

var transform = through2(function(chunk, encoding, cb){
    this.push(chunk.toString().toUpperCase());
    cb();
  }, function(cb) {
    cb();
  });

var server = http.createServer(function(req, res){
  req.pipe(transform).pipe(res)
  
});

server.listen(process.argv[2]);