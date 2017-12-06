var http = require('http');
var url  = require('url');
var fecha = new Date();
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'application/JSON'});
	res.write(fecha.getFullYear().toString());
	if (req.url === '/super-chat') {
	} else {
		res.writeHead(404);
	}
	res.end();
});

server.listen(port);
