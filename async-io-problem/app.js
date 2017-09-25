'use strict';
// fsモジュールは、ファイルシステムを扱うモジュール
const fs = require('fs');
const fileName = './test.txt';
// 非同期IOによって、処理の順次が保証されない
/**
 * 非同期 I/O は「 I/O の処理がひとつ終わってから、次の I/O の処理を行う」ことを保証していません。
 */
// for (let count = 0; count < 500; count++) {
// 	fs.appendFileSync(fileName, 'あ', 'utf8');
// 	fs.appendFileSync(fileName, 'い', 'utf8');
// 	fs.appendFileSync(fileName, 'う', 'utf8');
// 	fs.appendFileSync(fileName, 'え', 'utf8');
// 	fs.appendFileSync(fileName, 'お', 'utf8');
// 	fs.appendFileSync(fileName, '\n', 'utf8');
// }
fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
