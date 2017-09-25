// 'use strict';
// const http = require('http');
// const server = http.createServer(function (req, res) {
//     res.writeHead(200, {
//         // 'Content-Type': 'text/plain',
//         'Content-Type': 'text/html',
//         // 'charaset': 'utf-8'
//         'charaset': 'EUC-JP'
//     });
//     // res.write('������n');
//     // res.write(req.headers['user-agent'] + '\n');
//     res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTML����������\ｦ���</h1></body></html>');
//     res.end();
// });
// const port = 8000;
// server.listen(port, function () {
//     console.log('Listeng on ' + port);
// });
'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
        res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Type': 'text/html',
        'charset': 'utf-8'
    });
res.write('<!DOCTYPE html><html lang="ja">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body><h1>HTMLの一番大きい見出しを表示します</h1>テスト!!a</body></html>');
res.end();
});
const port = 8000;
server.listen(port, () => {
    console.log('Listening on ' + port);
});