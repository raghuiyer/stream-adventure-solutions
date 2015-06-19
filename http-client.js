var http = require('http'),
  through2 = require("through2");

var clientReq = http.request({port: 8099, method: "POST"}, function(response) {
    response.pipe(process.stdout)
});
process.stdin.pipe(clientReq);
