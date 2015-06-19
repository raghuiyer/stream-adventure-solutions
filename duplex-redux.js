var duplexer2 = require("duplexer2");
var stream = require("stream");

module.exports = function(counter) {
  var writeable = new stream.Writable({objectMode: true});

  var counts = {};

  writeable._write = function(chunk, encoding, callback) {
    counts[chunk.country] = (counts[chunk.country] || 0 )+ 1;
    
    callback();
  }

  var duplex = duplexer2(writeable, counter);

  duplex.on("finish", function(d) {
    counter.setCounts(counts);
  });

  return duplex;
}