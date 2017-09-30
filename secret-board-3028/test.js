'use strict';
const jade = require('jade');
const assert = require('assert');

// jade のテンプレートにおける XSS 脆弱性テスト
const html = jade.renderFile('./views/posts.jade', {
    posts: [{
        id: 1,
        content: '<script>alert(\'test\');</script>',
        postedBy: 'guest1',
        createdAt: new Date(),
        updateAt: new Date()
    }],
    user: 'guest1'
});

// スクリプトタグがエスケープされて含まれていることをチェック
assert(html.indexOf('&lt;script&gt;alert(\'test\');&lt;/script&gt;') > 0);
console.log('テストが正常に完了しました');
