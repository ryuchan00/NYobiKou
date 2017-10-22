```ecmascript 6
var routes = require('./routes/index')
var login = require('./routes/login')
```

モジュールを読み込み
.jsの拡張子は省略

```ecmascript 6
app.use('/', routes);
app.use('/login', login)
```

これでurlに接続した際に、第二引数のミドルウェアを読み込む

ミドルウエアを使う

[ミドルウェアの説明](https://qiita.com/morou/items/06cbe49f64d56d31b793#%E3%83%9F%E3%83%89%E3%83%AB%E3%82%A6%E3%82%A8%E3%82%A2%E3%82%92%E4%BD%BF%E3%81%86)

- ミドルウエアとはexpressにプラグインして使う機能のことで、connectフレームワークを基盤としている
- expressに同梱されているミドルウエアはexpressのドキュメント、またはconnectのドキュメントを参照のこと
- 利用するミドルウエアはapp.use([path, ] middlewareFunc)で読み込む
- pathを指定した場合、リクエストとpathが一致した場合のみそのミドルウエアが利用される。pathが省略された場合は'/'として扱われる
- ミドルウエアの実態はmiddlewareFunc関数で、そのシグネチャはfunction(req, res, next)
- ミドルウエアはapp.useされた順番に適用される（ルーティング設定の適用順序と同じ考え方）

```ecmascript 6
app.use(middlewareFactory(someOption));

/*
ミドルウエアはファクトリ関数（関数をreturnする関数）を使って生成するものが多い。この例の場合、middlewareFactory関数はfunction(req, res, next)というシグネチャを持った関数を返す
*/
```

# プロミスとは
```$xslt
Promise とは、非同期に実行される未来の結果を表すオブジェクトです。 Promise から値を取得する際には、 then 関数を呼び、そこに実行完了時に呼び出されて欲しい関数を与えることによって未来の結果を利用します。

Promise オブジェクトは、自分で作ることもできます。また 複数の Promise オブジェクトをまとめた Promise を作ることもできますし、例外を含む結果を扱うこともできる機能も持ち合わせています。そのため、Promise は非同期処理の結果を簡単に取り扱うことができる非常に便利な仕組みとなっています。
```

# UPSETについて

postgresql9.5の新機能

UPSERTが採用されたという事で使用方法を調べてみました。

UPSERTとは
「このデータをINSERTしたいけど、同じデータが存在していて制約で弾かれるかもしれない。そうなったらUPDATEしたいなあ。」
と言った場合に使える機能です。

ただし、UPSERT句が作られた訳ではなく「一般的にUPSERTと言われている機能を搭載したよ」と言う事みたいですね。
この後は実際に制約を設定したテーブルにUPSERTを試してみてどうなるかを見ていきます。

# Promise.all関数について

Promise.all 関数 は、配列で渡された全ての Promise が終了した際に結果を返す、 Promise オブジェクトを作成します。

なお、空配列が渡された場合も Promise オブジェクトが作成されます。