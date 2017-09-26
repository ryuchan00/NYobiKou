'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
	const now = new Date();
	// console.info('[' + now + '] Requested by ' + req.connection.remoteAddress);

	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});

	switch (req.method) {
		case 'GET':
			// res.write('GET ' + req.url);
            const fs = require('fs');
            const rs = fs.createReadStream('./form.html');
            rs.pipe(res);
			break;
		case 'POST':
			// res.write('POST ' + req.url);
			req.on('data', (data) => {
                // var query = document.location.search.substring(1);
            	console.log(data);
            // console.info('[' + now + '] Data posted: ' + data);
				const decoded = decodeURIComponent(data);
            	console.info('[' + now + '] 投稿: ' + decoded);
				res.write('<!DOCTYPE html><html lang="ja"><body><h1>' +
					decoded + 'が投稿されました</h1></body></html>');
            	res.end();
			});
			// res.end();
			break;
		default:
			break;
	}
	// res.end();
}).on('error', (e) => {
	console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
	console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
	console.info('[' + new Date() + '] Listening on ' + port);
});
