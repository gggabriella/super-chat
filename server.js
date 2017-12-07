var http = require('http');
var port = process.env.PORT || 3000;

var messages = [];
var server = http.createServer(function(req, res) {
	if (req.url === '/super-chat') {
		var body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        message = JSON.parse(Buffer.concat(body).toString());
        messages.push(message);

        res.writeHeader(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            'messages': messages
        }));
        res.end();
    });
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port);
