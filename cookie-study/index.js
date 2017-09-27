'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    const now = new Date().getTime();
res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
    // res.end('hi');
    // res.end(req.headers.cookie);
    const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
    res.end(new Date(last_access_time).toString());
});

const port = 8000;
server.listen(port, () => {
    console.info('Listening on ' + port);
});
// add