'use strict';
// 処理に時間がかかるコード
// function tri(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return tri(n - 1) + tri(n - 2);
// }
// const length = 4;
// for (let i = 1; i <= length; i++) {
//     console.log(tri(i));
// }

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
console.log(memo);
function tri(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tri(n - 1) + tri(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(tri(i));
}
