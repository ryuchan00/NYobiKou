'use strict';
// ファイルの読み書きするためのモジュール'fs'
const fs = require('fs');
// ストリームを行ごとに読み込むことができるモジュール
const readline = require('readline');
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs, 'output': {}});
const map = new Map(); // kye; 都道府県 value: 集計データのオブジェクト

// https://nodejs.org/api/readline.html#readline_event_line
// lineStringは、ストリームが受け取った1行分のデータ
rl.on('line', (lineString) => {
    // console.log(lineString);
    const columns = lineString.split(',');
// const columns = lineString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[2];
    const popu = parseInt(columns[7]);
    if (year === 2010 || year === 2015) {
    // if (year >= 2010 && 2015 >= year) {
    //     console.log(year);
    //     console.log(prefecture);
    //     console.log(popu);
        let value = map.get(prefecture);
        if (!value) {
            value = {
                p10: 0,
                p15: 0,
                change: null
            };
        }
        if (year === 2010) {
            value.p10 += popu;
        }
        if (year === 2015) {
            value.p15 += popu;
        }
        map.set(prefecture, value);
    }
});
rl.resume();
rl.on('close', () => {
    for (let pair of map) {
        const value = pair[1];
        value.change = value.p15 / value.p10;
    }
    const rankingArray = Array.from(map).sort((p1, p2) => {
        // 降順ソート
        // return p2[1].change - p1[1].change
        // 昇順ソート
        return p1[1].change - p2[1].change
    });
    // let rank = 0;
    const rankingStrings = rankingArray.map((p, i) => {
        return (i + 1) + '位: ' + p[0] + ': ' + p[1].p10 + '=>' + p[1].p15 + '　変化率' + p[1].change;
    });
    console.log(rankingStrings);
});
