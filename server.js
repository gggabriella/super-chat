var http = require('http');
var fecha = new Date();
var port = process.env.port || 3000

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'application/JSON'});
	res.write(fecha.getFullYear().toString());
	res.end();
});

server.listen(8080);
