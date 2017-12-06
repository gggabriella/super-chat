var http = require('http');
var fecha = new Date();
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res) {
	if (req.url === '/super-chat') {
		res.writeHead(200, {'Content-type': 'application/JSON'});
		res.write(fecha.getFullYear().toString());
	} else {
		res.writeHead(404);
	}
	res.end();
});

server.listen(port);
