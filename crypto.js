var crypto = require('crypto');
var decipherstream = crypto.createDecipher('aes256', process.argv[2]);

process.stdin.pipe(decipherstream).pipe(process.stdout)
