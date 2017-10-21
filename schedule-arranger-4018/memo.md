```ecmascript 6
var routes = require('./routes/index')
var login = require('./routes/login')
```

モジュールを読み込み
.jsの拡張子は省略

```ecmascript 6
app.use('/', routes);
app.use('/login,login')
```

これでURLの有効化

# プロミスとは
```$xslt
Promise とは、非同期に実行される未来の結果を表すオブジェクトです。 Promise から値を取得する際には、 then 関数を呼び、そこに実行完了時に呼び出されて欲しい関数を与えることによって未来の結果を利用します。

Promise オブジェクトは、自分で作ることもできます。また 複数の Promise オブジェクトをまとめた Promise を作ることもできますし、例外を含む結果を扱うこともできる機能も持ち合わせています。そのため、Promise は非同期処理の結果を簡単に取り扱うことができる非常に便利な仕組みとなっています。
```