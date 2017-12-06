var http = require('http');
var fecha = new Date();

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});	
	res.write(fecha.getFullYear().toString());
	res.end();
});

server.listen(8080);