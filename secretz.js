var ciphername = process.argv[2];
var passphrase = process.argv[3];

var through = require('through');
var crypto = require('crypto')
var zlib = require('zlib');
var tar = require('tar');

var decipherstream = crypto.createDecipher(ciphername, passphrase);
var parser = tar.Parse();
var gunzipstream = zlib.createGunzip();
parser.on('entry', function(e){
  var hash = crypto.createHash('md5');


  if (e.type !== 'File') return
  e.pipe(hash).pipe(through(function write(data){
    var hash = data.toString('hex')
    console.log( hash + ' ' + e.path);
  }))

})

process.stdin.pipe(decipherstream).pipe(gunzipstream).pipe(parser)